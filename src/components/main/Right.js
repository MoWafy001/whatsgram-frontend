import { useEffect } from 'react';
import ContactInfo from './ContactInfo';
import Chat from './Chat';
import TextBox from './TextBox';

export default function Right({ chatMessages }) {


  return <div style={component_style}>
    <ContactInfo />
    <Chat chatMessages={chatMessages} />
    <TextBox />
  </div>;
}

const component_style = {
  width: "100%",
  height: "100%",
  background: '#222',
  display: 'flex',
  flexDirection: 'column'
}