import React from 'react';
import Contact from './Contact';

export default function Contacts({ chats, socket }) {
  return <div style={component_style}>
    {chats.map(chat =>
      <Contact key={chat.id._serialized} data={chat} socket={socket} />
    )}
  </div>;
}

const component_style = {
  height: "100%",
  overflowY: 'auto',
  scrollbarWidth: 'thin'
}