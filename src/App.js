import { useState ,useEffect } from "react";

import Start from "./components/singin/Start";
import socketIOClient from "socket.io-client";

function App() {

 const [io, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient(`http://127.0.0.1:5000`);
    newSocket.on('whatsapp-init-started', qr => console.log(qr))
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]); 


  return (
    <Start io={io} />
  );
}

export default App;