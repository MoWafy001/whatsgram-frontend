import { useState } from 'react'
import CreateAccount from './CreateAccount';
import Login from './Login';


export default function RegisterationChoice() {
  const [choice, setChoice] = useState(null);
  return <div>
    <h1>Choose</h1>
    <span to="">Create an account</span>
    <span to="">Login</span>

    {choice === 'create' && <CreateAccount />}
    {choice === 'login' && <Login />}

  </div>;
}
