import { useState } from 'react';

export default function Login({ next }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async e => {
    e.preventDefault();

    if (!username || !password) return

    const request_data = {
      username: username,
      pwd: password
    }

    const response = await fetch('http://127.0.0.1:5000/api/users/login', {
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
  return <form onSubmit={login} className="sub-container">
    <h1>Login</h1>
    <input onChange={e => { setUsername(e.target.value) }} type="text" name="username" placeholder="username" />
    <input onChange={e => { setPassword(e.target.value) }} type="text" name="password" placeholder="password" />
    <button className="btn">Login</button>
  </form>;
}
