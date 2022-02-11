import React from 'react';
import Chat from './Chat';

export default function Chats({ chats, setCurrentChat }) {
  return <div style={component_style}>
    {chats.map(chat => (
      <Chat key={chat.chat.id._serialized} data={chat} setCurrentChat={setCurrentChat}/>
    ))}
  </div>;
}

const component_style = {
  height: "100%",
  overflowY: 'auto',
  scrollbarWidth: 'thin'
}