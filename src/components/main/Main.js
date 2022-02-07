import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import Left from './Left'
import Right from './Right'

import './main.css';


export default function Main() {

  const [chats, setChats] = useState([])

  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:5000')

    socket.on('connect', () => {
      console.log('connected');
      console.log('trying to login');
      socket.emit('whatsapp-login', localStorage.getItem('username'))
    })

    socket.on('whatsapp-ready', msg => {
      console.log(msg);

      socket.emit('wa get chats')
    })

    socket.on('wa chats sent', newChats => {
      console.log(newChats);
      setChats([...chats, ...newChats])
    })

    return () => { socket.disconnect(); console.log('disconnected'); }
  }, [])



  return <div className='main'>
    <Left chats={chats} />
    <Right />
  </div>;
}
