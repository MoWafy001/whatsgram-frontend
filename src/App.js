import { useState } from 'react';

import Start from "./components/singin/Start";
import Main from './components/main/Main';

function App() {

  const [io, setIo] = useState(null)
  const [loggedIn, login] = useState(false)
  const [availableApps, setAvailableApps] = useState([])

  const addApp = app => {
    setAvailableApps([...availableApps, app])
  }

  return (
    <>
      {!loggedIn && <Start handelLogin={login} addApp={addApp} io={io} setIo={setIo}/>}
      {loggedIn && <Main io={io}/>}
    </>
  );
}

export default App;