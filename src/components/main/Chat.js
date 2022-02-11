
export default function Chat({ data, setCurrentChat }) {
  const wa_d_user = 'wa-d-user.jpeg';
  const wa_d_group = 'wa-d-group.png';

  let last_message = get_last_message(data.last_message)

  const hanel_click = ()=>{
    setCurrentChat({
      chat: data.chat,
      profile_picture_url: data.profile_picture_url,
    })
  }

  return <div className='contact' onClick={hanel_click}>
    <img src={data.profile_picture_url || (data.chat.isGroup ? wa_d_group : wa_d_user)} alt="person" />
    <div className='contact-info'>
      <span>{data.chat.name}</span>
      <span>{last_message}</span>
    </div>
  </div>;
}


const get_last_message = lm => {
  let last_message;
  if (lm === undefined)
    last_message = 'No Messages'
  else
    last_message = lm.body

  if (last_message === '') {
    last_message = lm.type
    if(lm.type === 'ptt')
      last_message = 'record'
  }

  if (last_message.length > 20)
    last_message = last_message.slice(0, 20) + "..."

  return last_message
}