import ContactInfo from './ContactInfo';
import ChatBox from './ChatBox';
import TextBox from './TextBox';

export default function Right({currentChat}) {

  return <div style={component_style}>
    <ContactInfo currentChat={currentChat} />
    <ChatBox/>
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