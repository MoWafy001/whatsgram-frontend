import { useState } from 'react'
import CreateAccount from './CreateAccount';
import Login from './Login';
import { Transition, animated } from 'react-spring';

export default function RegisterationChoice({ next }) {
  const [choice, setChoice] = useState(null);

  return <div>
    <h1>Choose</h1>
    <span className="btn" onClick={() => { setChoice('create') }}>Create an account</span>
    <span className="btn" onClick={() => { setChoice('login') }}>Login</span>

    <Transition
      items={choice}
      from={{ opacity: 0, transX: -1, width:'min-content'}}
      enter={{ opacity: 1, transX: 0}}
      leave={{ opacity: 0,  transX: 1, position:'absolute'}}
      config={{duration:500}}
    >
      {
        (props, choice) => {
          if (choice === 'create') return <animated.div style={{...props, transform: props.transX.to(v => `translateX(${v*100}%)`)}}>
            <CreateAccount next={next} />
          </animated.div>

          if (choice === 'login') return <animated.div style={{...props, transform: props.transX.to(v => `translateX(${v*100}%)`)}}>
            <Login next={next} />
          </animated.div>
        }
      }
    </Transition>


  </div>;
}
