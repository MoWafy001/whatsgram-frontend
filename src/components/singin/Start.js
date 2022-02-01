import { useState } from "react";
import ChoosingPlatforms from "./platforms/ChoosingPlatforms";
import RegisterationChoice from "./registeration/RegisterationChoice";

import "./start.css"
/*
1. select whether to signin, or to create an account
2. choose between whatsapp or telegram or both
3. sign in to whatsapp
4. sign in to telegram
5. redirect to the main app
*/
export default function Start() {

  const [level, setLevel] = useState(0)

  const nextLevel = () => {
    setLevel(level + 1);
  }

  return <div className="container">

    {level === 0 &&
      <RegisterationChoice next={nextLevel} />
    }

    {level === 1 &&
      <ChoosingPlatforms />
    }
  </div>;
}
