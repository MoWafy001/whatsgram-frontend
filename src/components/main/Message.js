import React from 'react';

export default function Message({ data }) {
    const fromMe = true;
    return <div style={{
        ...component_style,
        marginLeft: data.fromMe ? 'auto' : 'unset',
        textAlign: data.fromMe ? 'right' : 'left',
        background: ['sticker', 'image'].includes(data.type) ? '#0000' : "#fff",
    }}>
        {['sticker', 'image'].includes(data.type) && <img src={`data:image/png;base64,${data.media.data}`} style={{ width: '100%' }} alt="sticker" />}
        {data.type === 'chat' && <div style={{textAlign:'left'}}>
            {data.body}
        </div>}
    </div>;
}

const component_style = {
    width: 'fit-content',
    maxWidth: '40%',
    padding: '0.5rem 1rem',
    margin: '0.3rem 0',
    borderRadius: '0.2rem',
    overflowWrap: 'break-word',
}