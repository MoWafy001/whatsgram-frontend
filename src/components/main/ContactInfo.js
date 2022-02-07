import React from 'react';

export default function ContactInfo() {
  return <div style={component_style}>
    <img style={img_style} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fman-person-people-white-boy-cute-male-portrait-young-professional-profession-lifestyle-smiling-smile-cheerful-fun-happy-happiness-glasses-handsome-865531.jpg&f=1&nofb=1" alt="person" />
    <div className='contact-header'>
      <h2>Contact Name</h2>
      <span className='desc'>online</span>
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