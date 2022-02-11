import React from 'react';
import SearchBar from './SearchBar';
import Chats from './Chats';

export default function Left({chats, setCurrentChat}) {
  return <div style={component_style}>
    <SearchBar />
    <Chats chats={chats} setCurrentChat={setCurrentChat}/>
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