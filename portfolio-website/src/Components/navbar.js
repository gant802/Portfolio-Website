import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div id="navbar-container">
            <NavLink to="/" className="navbar-btns">Grant Cummings</NavLink>
            <div id="navbar-three-links">
                <NavLink to="/contact-me">Contact</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
        </div>
    )
}

export default NavBar