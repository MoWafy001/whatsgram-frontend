import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import Left from './Left'
import Right from './Right'

import './main.css';


export default function Main({ io }) {

  const [socket, setSocket] = useState(io)

  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState({
    chat:null,
    profile_picture_url: '',
  })
  const [currentMessages, setCurrentMessages] = useState([])

  // initialize the socket
  useEffect(() => {
    if (io === null) setSocket(socketIOClient('http://127.0.0.1:5000'))
    return () => { if(socket) socket.disconnect(); }
  }, [])

  // after initalization
  useEffect(() => {
    if (socket === null) return
    handel_socket(socket, setChats, setCurrentMessages)
  }, [socket])


  const setNewCurrentChat = newState => {
    if(newState.chat === currentChat.chat) return

    setCurrentChat(newState)
    console.log('messages requested');
    socket.emit('whatsapp-request-chat-messages', newState.chat.id._serialized)
  }



  return <div className='main'>
    <Left chats={chats} setCurrentChat={setNewCurrentChat} />
    <Right currentChat={currentChat} currentMessages={currentMessages} />
  </div>;
}









const handel_socket = (socket, setChats, setCurrentMessages) => {
  // initialize the whatsapp client
  socket.emit('whatsapp-login', localStorage.getItem('username'))
  console.log('trying to login...');

  // when whatsapp is ready
  socket.on('whatsapp-ready', () => {
    console.log('ready');
    console.log('ready');
    socket.emit('whatsapp-request-chats')
    console.log('requesting chats...');
  })

  // receiving the chats
  socket.on('whatsapp-request-chats-done', chats => {
    console.log('chats received');
    setChats(chats);
  })

  // receiving chat messages
  socket.on('whatsapp-request-chat-messages-done', newMessages => {
    setCurrentMessages(newMessages)
    console.log(newMessages);
  })
}