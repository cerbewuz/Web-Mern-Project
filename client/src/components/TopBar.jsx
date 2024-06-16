// src/components/TopBar.jsx
import React from 'react'
import '../styles/topbar.css'
import { Link } from 'react-router-dom'

function TopBar() {
    return (
        <div className="topbar">
            <div className="header-section">
            <img src="/ghasplogo.png" alt="Logo" className="logo"/>
            <h1>GHASP</h1>
            <p>Guppy High-Breeding Aquarist Society Philippines</p>
            </div>
            <div className="navLinks">  
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    );
}

export default TopBar
