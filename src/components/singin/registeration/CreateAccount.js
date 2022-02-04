import { useState } from 'react';

export default function CreateAccount({ next }) {

  const [input_username, setUsername] = useState('')
  const [input_password, setPassword] = useState('')
  const [input_passwordRepeat, setPasswordRepeat] = useState('')

  const createAccount = async e => {
    e.preventDefault();

    if (!input_username || !input_password || !input_passwordRepeat) return
    if (input_password !== input_passwordRepeat) return

    const request_data = {
      username: input_username,
      pwd: input_password
    }

    const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request_data)
    })

    if (!response.ok) return console.log(await response.json());

    const { username, access_token, refresh_token } = await response.json();

    localStorage.setItem('username', username);
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);

    next();

  }


  return <form onSubmit={createAccount} className="sub-container">
    <h1>Create an account</h1>
    <input onChange={e => { setUsername(e.target.value) }} type="text" name="username" placeholder="username" />
    <input onChange={e => { setPassword(e.target.value) }} type="text" name="password" placeholder="password" />
    <input onChange={e => { setPasswordRepeat(e.target.value) }} type="text" name="password" placeholder="repeat password" />
    <button className="btn">Create</button>
  </form>;
}
