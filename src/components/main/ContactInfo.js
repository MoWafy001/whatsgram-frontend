import React from 'react';

export default function ContactInfo({currentChat}) {
  const wa_d_user = 'wa-d-user.jpeg';
  const wa_d_group = 'wa-d-group.png';

  const name = currentChat.chat ? currentChat.chat.name : ""

  return <div style={component_style}>
    <img style={img_style} src={currentChat.profile_picture_url || (currentChat.isGroup ? wa_d_group : wa_d_user)} alt="person" />
    <div className='contact-header'>
      <h2>{name}</h2>
      <span className='desc'></span>
    </div>
  </div>;
}

const component_style = {
  minHeight: 'calc(4rem + 3px)',
  maxHeight: 'calc(4rem + 3px)',
  width: 'calc(100% - 1px)',
  background: '#111',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const img_style = {
  width: '2.5rem',
  aspectRatio: '1/1',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  margin: '1rem'
}