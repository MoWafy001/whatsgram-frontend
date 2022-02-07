import React from 'react';
import Contact from './Contact';

export default function Contacts({ chats }) {
  console.log(chats);
  return <div style={component_style}>
    {chats.map(chat =>
      <Contact key={chat.name} data={chat} />
    )}
  </div>;
}

const component_style = {
  height: "100%",
  overflowY: 'auto',
  scrollbarWidth: 'thin'
}