import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import Left from './Left'
import Right from './Right'

import './main.css';


export default function Main({ io }) {

  const [chats, setChats] = useState([])
  const [socket, setSocket] = useState(null)
  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
    if (socket === null) {
      setSocket(socketIOClient('http://127.0.0.1:5000'))
    }
    else {
      socket.emit('wa get chats')
    }
    return () => { socket.disconnect(); console.log('disconnected'); }
  }, [])

  useEffect(() => {
    if (socket === null) return
    socket.on('connect', () => {
      console.log('connected');
      console.log('trying to login');
      socket.emit('whatsapp-login', localStorage.getItem('username'))
    })

    socket.on('whatsapp-ready', msg => {
      console.log(msg);

      socket.emit('wa get chats', { offset: chats.length, limit: 10 })
    })
    let c = []
    socket.on('wa chats sent', newChats => {
      c = [...c, ...newChats]
      setChats(c)
      if (newChats.length === 0) {
        socket.off('wa chats sent')
      } else {

        socket.emit('wa get chats', { offset: c.length, limit: 10 })
      }
    })

    socket.on('wa chat messages', messages => {
      setChatMessages(messages)
      console.log(messages);
    })
  }, [socket])


  return <div className='main'>
    <Left chats={chats} socket={socket} />
    <Right messages={chatMessages} />
  </div>;
}
