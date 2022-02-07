import React from 'react';


export default function Contact({data}) {
  const wa_d_user = 'wa-d-user.jpeg';
  const wa_d_group = 'wa-d-group.png';
  console.log(data);
  return <div className='contact'>
      <img src={data.img || wa_d_user} alt="person" />
      <div className='contact-info'>
          <span>{data.name}</span>
          <span>last message</span>
      </div>
  </div>;
}
