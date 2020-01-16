import React from 'react';
import Kodflix from '../assets/Logos/Kodflix Logo.png'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <Link to="/kodflix">
            <img src={Kodflix} alt="Kodflix text logo" className="header-logo" />
        </Link>
    );
}