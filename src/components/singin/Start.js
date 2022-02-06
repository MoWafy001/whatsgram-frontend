import { useState } from "react";
import ChoosingPlatforms from "./platforms/ChoosingPlatforms";
import RegisterationChoice from "./registeration/RegisterationChoice";
import { Transition, animated } from 'react-spring';

import "./start.css"
/*
1. select whether to signin, or to create an account
2. choose between whatsapp or telegram or both
3. sign in to whatsapp
4. sign in to telegram
5. redirect to the main app
*/
export default function Start({ handelLogin, addApp}) {

  const [level, setLevel] = useState(0)

  const nextLevel = () => {
    setLevel(level + 1);
  }

  return <div className="container">

    <Transition
      items={level}
      from={{ opacity: 0, transY: -1 }}
      enter={{ opacity: 1, transY: 0 }}
      leave={{ opacity: 0, transY: 1, position: 'absolute' }}
      config={{ duration: 800 }}
    >

      {
        (props, level) => {
          if (level === 0) return <animated.div style={{ ...props, transform: props.transY.to(v => `translateY(${v * 100}%)`) }}>
            <RegisterationChoice next={nextLevel} />
          </animated.div>

          if (level === 1) return <animated.div style={{ ...props, transform: props.transY.to(v => `translateY(${v * 100}%)`) }}>
            <ChoosingPlatforms handelLogin={handelLogin} addApp={addApp} />
          </animated.div>
        }
      }

    </Transition>



  </div>;
}
