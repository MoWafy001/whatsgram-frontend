import { useState } from "react";

export default function ChoosingPlatforms() {

const [platform, setPlatform] = useState(null);

  return <div>
      <h1>Choose</h1>
      <span>whatsapp</span>
      <span>telegram</span>

    {platform === "whatsapp" && <h1>login to whatsapp</h1>}
    {platform === "telegram" && <h1>login to telegram</h1>}

      <span>start the app</span>
  </div>;
}
