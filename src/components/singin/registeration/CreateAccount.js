import { useState, useEffect } from 'react';

export default function CreateAccount({ next }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const createAccount = async e => {
    e.preventDefault();

    if (!username || !password || !passwordRepeat) return
    if (password !== passwordRepeat) return

    const request_data = {
      username: username,
      pwd: password
    }

    const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request_data)
    })

    if (!response.ok) return

    console.log(await response.json());
    next();

  }

  useEffect(() => {
    console.log('mount it!');
  }, []);


  return <form onSubmit={createAccount} className="sub-container">
    <h1>Create an account</h1>
    <input onChange={e => { setUsername(e.target.value) }} type="text" name="username" placeholder="username" />
    <input onChange={e => { setPassword(e.target.value) }} type="text" name="password" placeholder="password" />
    <input onChange={e => { setPasswordRepeat(e.target.value) }} type="text" name="password" placeholder="repeat password" />
    <button className="btn">Create</button>
  </form>;
}
