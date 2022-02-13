import {useEffect} from 'react';
import Message from './Message';

export default function Chat({currentMessages}) {

  useEffect(()=>{
    const cb = document.querySelector('.chatbox');
    cb.scroll(0, cb.scrollHeight)
  })

  return <div style={component_style} className="chatbox">
    {currentMessages.map(message => <Message key={message.id._serialized} data={message}/>)}
  </div>;
}

const component_style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  padding: '1rem',
  scrollbarWidth: 'thin',
}