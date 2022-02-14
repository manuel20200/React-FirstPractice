import React from 'react';
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav>
            <button className="items">
                <a href="/" className="items">Home</a>
            </button>
            <button className="items">
                <a href="/">User</a>
            </button>
            <button className="items">
                <a href="/">History</a>
            </button>
            <button className="items">
                <a href="/">Contact</a>
            </button>
            <button className="item-last">
                <a href="/">Login</a>
            </button>
        </nav>
    );
};

export default NavComponent;

