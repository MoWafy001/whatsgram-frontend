import React from 'react';

export default function SearchBar() {
    return <div style={component_style}>
        <input style={input_style} placeholder='search' />
    </div>
}

const component_style = {
    background: '#111',
    padding: '1rem',
    borderBottom: '1px solid #fff1'
}

const input_style = {
    width: 'calc(100% - 1rem)',
    outline: 'none',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '0.2rem',
    background: '#fff1',
    color: '#fff',
    fontSize: '1rem'
}