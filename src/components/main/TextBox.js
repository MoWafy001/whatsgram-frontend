import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSmileWink,
  faFileUpload,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons'

import {useState} from 'react'


export default function TextBox({send}) {

  const [inputText, setInputText] = useState('')

  const handel_input_key_up = e => {
    if(e.key !== 'Enter') return

    console.log(inputText, 'sent');
    send.sendText(inputText)
    setInputText('')
  }

  return <div style={component_style}>
    <span className="input-icon"><FontAwesomeIcon icon={faSmileWink} /></span>
    <span className="input-icon"><FontAwesomeIcon icon={faFileUpload} /></span>
    <input onKeyUp={handel_input_key_up} value={inputText} onChange={e => setInputText(e.target.value)} type="text" style={input_style} placeholder="type here" />
    <span className="input-icon"><FontAwesomeIcon icon={faMicrophone} /></span>
  </div>;
}

const component_style = {
  minHeight: '4rem',
  maxHeight: '4rem',
  background: '#111',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
}

const input_style = {
  border: 'none',
  outline: 'none',
  width: "100%",
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  background: '#fff1',
  color: '#fff',
  borderRadius: '0.2rem',
  margin: '0 1em',
}