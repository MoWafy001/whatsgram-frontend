import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import QRCode from "react-qr-code";

export default function LoginToWhatsapp() {

  const [, setSocket] = useState(null);
  const [title, setTitle] = useState('Trying to login...')
  const [qr, setQr] = useState(null)

  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:5000')
    setSocket(socket)

    socket.on('connect', () => {
      console.log('connected');
      console.log('trying to get the code');
      socket.emit('whatsapp-login', localStorage.getItem('username'))
    })

    socket.on('WA-QR', qr => {
      console.log(qr);
      setTitle('Scan the code')
      setQr(qr)
    })
    socket.on('whatsapp-ready', msg => {
      console.log(msg);
      setQr(null)
      setTitle('You are ready!');
    })

    return () => { socket.disconnect(); console.log('disconnected'); }
  }, [])

  return <div>
    <h1>{title}</h1>
    {qr && <QRCode value={qr} />}
  </div>;
}
