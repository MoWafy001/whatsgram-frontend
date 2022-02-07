import React from 'react';

export default function Message({me}) {
    return <div style={{...component_style, marginLeft: me?'auto':'unset', background: me?'#777':'#fff'}}>
        message
    </div>;
}

const component_style = {
    background: '#fff',
    width: 'fit-content',
    padding: '0.5rem 1rem',
    margin: '0.3rem 0',
    borderRadius: '0.2rem',
}