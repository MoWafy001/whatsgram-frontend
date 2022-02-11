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

  // initialize the socket
  useEffect(() => {
    if (io === null) setSocket(socketIOClient('http://127.0.0.1:5000'))
    return () => { socket.disconnect(); }
  }, [])


  // after initalization
  useEffect(() => {
    if (socket === null) return
    handel_socket(socket, setChats)
  }, [socket])



  return <div className='main'>
    <Left chats={chats} setCurrentChat={setCurrentChat} />
    <Right currentChat={currentChat} />
  </div>;
}









const handel_socket = (socket, setChats) => {
  // initialize the whatsapp client
  socket.emit('whatsapp-login', localStorage.getItem('username'))

  // when whatsapp is ready
  socket.on('whatsapp-ready', () => {
    console.log('ready');
    socket.emit('whatsapp-request-chats')
  })

  // receiving the chats
  socket.on('whatsapp-request-chats-done', chats => {
    console.log(chats);
    setChats(chats);
  })
}