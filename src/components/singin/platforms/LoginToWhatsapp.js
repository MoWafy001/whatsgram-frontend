import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import QRCode from "react-qr-code";

export default function LoginToWhatsapp({ ready, io, setIo }) {

  const [title, setTitle] = useState('Trying to login...')
  const [qr, setQr] = useState(null)

  useEffect(() => {
    let socket;
    let ready_state = false

    if (io === null) {
      socket = socketIOClient()
      setIo(socket)
    } else {
      socket = io
    }

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
    socket.on('whatsapp-ready', () => {
      setQr(null)
      setTitle('Whatsapp is ready!');
      ready('whatsapp');
      ready_state = true;
    })

    return () => {
      if (!ready_state) {
        socket.disconnect(); console.log('disconnected');
      }
      socket.off('WA-QR')
      socket.off('whatsapp-ready')
      socket.off('connect')
    }
  }, [])

  return <div>
    <h1>{title}</h1>
    {qr && <QRCode value={qr} />}
  </div>;
}
