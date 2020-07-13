import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
                <NavLink to="/users" className="nav-link">Users</NavLink>
                <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
