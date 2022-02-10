import React from 'react';

export default function Message({message}) {
    return <div style={{...component_style, marginLeft: message.fromMe?'auto':'unset', background: message.fromMe?'#777':'#fff'}}>
        {message.body}
    </div>;
}

const component_style = {
    background: '#fff',
    width: 'fit-content',
    maxWidth: '50%',
    padding: '0.5rem 1rem',
    margin: '0.3rem 0',
    borderRadius: '0.2rem',
    overflowWrap: 'break-word',
}