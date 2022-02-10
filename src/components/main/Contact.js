
export default function Contact({ data, socket }) {
  const wa_d_user = 'wa-d-user.jpeg';
  const wa_d_group = 'wa-d-group.png';

  if (data.last_message)
    data.last_message.body = data.last_message.body.length > 17 ? data.last_message.body.slice(0, 17) + "..." : data.last_message.body

  const handel_chat_clicked = () => {
    socket.emit('wa chat selected', { chat_id: data.id._serialized, limit:100 })
  }

  return <div className='contact' onClick={handel_chat_clicked}>
    <img src={data.img || (data.isGroup ? wa_d_group : wa_d_user)} alt="person" />
    <div className='contact-info'>
      <span>{data.name}</span>
      <span>{data.last_message ? (data.last_message.body || data.last_message.type) : 'no messages'}</span>
    </div>
  </div>;
}
