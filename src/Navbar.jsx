import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "./Images/tahir.jpg"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <ul>
                   <li className="nav-logo"><NavLink exact className="log_link link" activeClassName="acitive_link" to="/">M&#128151;T</NavLink></li>
                   <li className="nav-toggle"><i className="fas fa-bars"></i></li>
                   <li className="nav-link"><NavLink exact className="link" activeClassName="acitive_link" to="/">Home</NavLink></li>
                   <li className="nav-link"><NavLink exact className="link" activeClassName="acitive_link" to="/about">About</NavLink></li>
                   <li className="nav-link"><NavLink exact className="link" activeClassName="acitive_link" to="/contactus">Contact Us</NavLink></li>
                   <li className="nav-link"><NavLink exact className="link" activeClassName="acitive_link" to="/projects">Projects</NavLink></li>
                   <li className="nav-link-img"><NavLink exact className="link-img" activeClassName="acitive_link" to="/projects"><img src={image} alt="tahir img" /></NavLink></li>
               </ul>
            </nav>
        </>
    );
}

export default Navbar;