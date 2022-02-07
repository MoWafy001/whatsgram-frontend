import React from 'react';
import Message from './Message';

export default function Chat() {
  return <div style={component_style}>
    <Message me={true} />
    <Message />
    <Message me={true} />
    <Message />
    <Message me={true} />
    <Message me={true} />
    <Message me={true} />
    <Message />
    <Message me={true} />
    <Message />
    <Message />
    <Message />
    <Message me={true} />
    <Message />
    <Message me={true} />
    <Message />
    <Message me={true} />
    <Message />

  </div>;
}

const component_style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  padding: '1rem',
  scrollbarWidth:'thin',
}