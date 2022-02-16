import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import Left from './Left'
import Right from './Right'

import './main.css';


export default function Main({ io }) {

  const [socket, setSocket] = useState(io)

  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState({
    chat: null,
    profile_picture_url: '',
  })
  const [currentMessages, setCurrentMessages] = useState([])

  // initialize the socket
  useEffect(() => {
    if (io === null) setSocket(socketIOClient('http://127.0.0.1:5000'))
    return () => { if (socket) socket.disconnect(); }
  }, [])


  // after initalization
  useEffect(() => {
    if (socket === null) return
    handel_socket(socket, setChats, setCurrentMessages, setCurrentChat)
  }, [socket])


  const setNewCurrentChat = newState => {
    if (newState.chat === currentChat.chat) return

    setCurrentChat(newState)
    console.log('messages requested');
    socket.emit('whatsapp-request-chat-messages', newState.chat.id._serialized)
  }

  const sendText = text => {
    socket.emit('whatsapp-send-text', { text, chat: currentChat.chat })
  }

  const sendImage = img_data => {
    socket.emit('whatsapp-send-image', { img_data, chat: currentChat.chat})
  }


  return <div className='main'>
    <Left chats={chats} setCurrentChat={setNewCurrentChat} />
    <Right currentChat={currentChat} currentMessages={currentMessages} send={{ sendText, sendImage }} />
  </div>;
}









const handel_socket = (socket, setChats, setCurrentMessages, setCurrentChat) => {
  // initialize the whatsapp client
  socket.emit('whatsapp-login', localStorage.getItem('username'))
  console.log('trying to login...');

  // when whatsapp is ready
  socket.on('whatsapp-ready', () => {
    console.log('ready');
    socket.emit('whatsapp-request-chats')
    console.log('requesting chats...');
  })

  // receiving the chats
  socket.on('whatsapp-request-chats-done', chats => {
    console.log('chats received');
    console.log(chats);
    setChats(chats);
  })

  // receiving chat messages
  socket.on('whatsapp-request-chat-messages-done', newMessages => {
    console.log(newMessages);
    setCurrentMessages(newMessages)
  })

  // new message created
  socket.on('whatsapp-message-create', ({ message, chat }) => {
    setChats(oldChats => {
      let c = oldChats.find(ch => ch.chat.id._serialized === chat.id._serialized)
      c.last_message = message
      console.log(c);
      oldChats = oldChats.filter(ch => ch !== c)
      oldChats = [c, ...oldChats]

      setCurrentChat(oldChat => {
        if (oldChat.chat.id._serialized !== chat.id._serialized) return oldChat

        console.log(message);

        setCurrentMessages(oldMessages => {
          if(oldMessages.includes(message)) return oldMessages
          else return [...oldMessages, message]
        })
        return oldChat
      })

      return oldChats
    })
  })
}