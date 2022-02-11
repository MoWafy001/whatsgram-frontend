import React from 'react';

export default function ContactInfo({currentContact}) {
  const wa_d_user = 'wa-d-user.jpeg';
  const wa_d_group = 'wa-d-group.png';

  console.log(currentContact);
  return <div style={component_style}>
    <img style={img_style} src={currentContact.img || (currentContact.isGroup ? wa_d_group : wa_d_user)} alt="person" />
    <div className='contact-header'>
      <h2>{currentContact.name === undefined? currentContact.pushname : currentContact.name}</h2>
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