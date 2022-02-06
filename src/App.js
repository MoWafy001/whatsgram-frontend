import { useState } from 'react';

import Start from "./components/singin/Start";
import Main from './components/main/Main';

function App() {

  const [loggedIn, login] = useState(false)
  const [availableApps, setAvailableApps] = useState([])

  const addApp = app => {
    setAvailableApps([...availableApps, app])
  }

  return (
    <>
      {!loggedIn && <Start handelLogin={login} addApp={addApp}/>}
      {loggedIn && <Main/>}
    </>
  );
}

export default App;