import ContactInfo from './ContactInfo';
import ChatBox from './ChatBox';
import TextBox from './TextBox';

export default function Right({currentChat, currentMessages, send}) {

  return <div style={component_style}>
    <ContactInfo currentChat={currentChat} />
    <ChatBox currentMessages={currentMessages}/>
    <TextBox send={send} />
  </div>;
}

const component_style = {
  position: 'relative',
  height: "100%",
  width: '75vw',
  background: '#222',
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
}