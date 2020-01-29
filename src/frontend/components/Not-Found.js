import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

export default function NotFound() {
    return (
        <div className="notFound">
            <Header />
            <h1>Oops, it looks like we haven't added that movie yet :(</h1>
            <div className="link-div">
                <Link to="/kodflix" className="link">Back to home page</Link>
            </div>
        </div>
    );
}