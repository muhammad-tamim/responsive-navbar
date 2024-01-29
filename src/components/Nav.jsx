import React, { useState } from 'react';
import './nav.css'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="logo">Your Logo</div>
            <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="hamburger-icon" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    );
};

export default Nav;
