import React from 'react';
import SearchBar from './SearchBar';
import Contacts from './Contacts';

export default function Left({ chats, socket }) {
  return <div style={component_style}>
    <SearchBar />
    <Contacts chats={chats} socket={socket} />
  </div>;
}

const component_style = {
  width: "100%",
  minWidth: '15rem',
  maxWidth: '30%',
  height: '100%',
  background: '#111',
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid #fff1',
}