import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import Klogo from '../assets/Logos/K logo.png';
import './Welcome.css'

export default function Welcome() {
        const ref = useRef([]);

        const [items, set] = useState([]);
        
        const props = useSpring({opacity: 1, from: {opacity: 0}});

        const transitions = useTransition(items, null, {
            from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
            enter: [
              { opacity: 1, height: 80, innerHeight: 80 },
              { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
              { transform: 'perspective(600px) rotateX(0deg)' },
            ],
            leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
            update: { color: '#28b4d7' },
        });

        return <animated.div style={props} className="container"><img className="klogo" src={Klogo} /></animated.div>;
};