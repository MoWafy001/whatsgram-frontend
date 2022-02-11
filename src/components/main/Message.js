import React from 'react';

export default function Message() {
    const fromMe=true;
    return <div style={{...component_style, marginLeft: fromMe?'auto':'unset', background: fromMe?'#777':'#fff'}}>
        message
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