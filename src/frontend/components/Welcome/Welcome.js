import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'
import Klogo from '../../assets/Logos/K-logo.png';
import gradient from '../../assets/Logos/gradient.png'
import './Welcome.css'

export default function Welcome() {
  const props1 = useSpring({
    from: {
      opacity: 0,
      background: 0
    },
    to: {
      opacity: 1
    },
    config: {
      duration: 3000
    }
  });

  const props2 = useSpring({
    from: {
      opacity: 0,
      background: 0
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 4000
    }
  });

  return (
    <Link to="/kodflix">
      <animated.div
        style={props1}
        className="container"
      >
        <img src={gradient} className="gradient" alt=""/>
        <animated.div
          style={props2}
          className="container"
        >
          <img className="klogo" src={Klogo} alt=""/>
        </animated.div>
      </animated.div>
    </Link>
  );
};