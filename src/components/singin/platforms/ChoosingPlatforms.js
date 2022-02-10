import { useState } from "react";
import LoginToWhatsapp from "./LoginToWhatsapp";

export default function ChoosingPlatforms({handelLogin, addApp, io, setIo}) {

  const [platform, setPlatform] = useState(null);
  const [loggedIn, setLoggedin] = useState([])

  const addToLoggedIn = val => {
    setLoggedin([...loggedIn, val])
    addApp(val);
  }


  return <div>
    <h1>Login to the app</h1>
    <span style={loggedIn.includes('whatsapp') ? {background:'green', color:'white'} : {}} className="btn" onClick={() => { if (!loggedIn.includes('whatsapp')) setPlatform('whatsapp') }}>whatsapp</span>
    <span className="btn" onClick={() => { setPlatform(null) }}>telegram</span>

    {platform === "whatsapp" && <LoginToWhatsapp ready={addToLoggedIn} io={io} setIo={setIo} />}
    {platform === "telegram" && <h1>login to telegram hasn't been impelemented yet</h1>}

    {loggedIn.length !== 0 && <span className="btn" onClick={()=>handelLogin(true)}>start the app</span>}
  </div>;
}
