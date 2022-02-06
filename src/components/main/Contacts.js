import React from 'react';
import Contact from './Contact';

export default function Contacts() {
  return <div style={component_style}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
  </div>;
}

const component_style = {
    height: "100%",
}