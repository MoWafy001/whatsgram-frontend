import { useState, useEffect } from "react";

export default function ChoosingPlatforms({io}) {

  const [platform] = useState(null);


  return <div>
    <h1>Login to the app</h1>
    <span className="btn" onClick={()=>{io.emit('whatsapp-login', localStorage.getItem('username'))}}>whatsapp</span>
    <span className="btn">telegram</span>

    {platform === "whatsapp" && <h1>login to whatsapp</h1>}
    {platform === "telegram" && <h1>login to telegram</h1>}

    <span className="btn">start the app</span>
  </div>;
}
