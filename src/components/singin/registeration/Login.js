import { useState } from 'react';

export default function Login({ next }) {
  const [input_username, setUsername] = useState('')
  const [input_password, setPassword] = useState('')

  const login = async e => {
    e.preventDefault();

    if (!input_username || !input_password) return

    const request_data = {
      username: input_username,
      pwd: input_password
    }

    const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
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
  return <form onSubmit={login} className="sub-container">
    <h1>Login</h1>
    <input onChange={e => { setUsername(e.target.value) }} type="text" name="username" placeholder="username" />
    <input onChange={e => { setPassword(e.target.value) }} type="text" name="password" placeholder="password" />
    <button className="btn">Login</button>
  </form>;
}
