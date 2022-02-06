import React from 'react';

export default function SearchBar() {
    return <div style={component_style}>
        <input style={{ width: 'calc(100% - 1em)', outline: 'none', border: 'none', padding:'0.5em', borderRadius: '0.2em' }} />
    </div>
}

const component_style = {
    background: '#333',
    padding: '1em',
}