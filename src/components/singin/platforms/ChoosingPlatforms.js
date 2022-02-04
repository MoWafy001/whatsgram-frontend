import { useState } from "react";
import LoginToWhatsapp from "./LoginToWhatsapp";

export default function ChoosingPlatforms() {

  const [platform, setPlatform] = useState(null);


  return <div>
    <h1>Login to the app</h1>
    <span className="btn" onClick={()=>{setPlatform('whatsapp')}}>whatsapp</span>
    <span className="btn" onClick={()=>{setPlatform(null)}}>telegram</span>

    {platform === "whatsapp" && <LoginToWhatsapp/>}
    {platform === "telegram" && <h1>login to telegram</h1>}

    <span className="btn">start the app</span>
  </div>;
}
