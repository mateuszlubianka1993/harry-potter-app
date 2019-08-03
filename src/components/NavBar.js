import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav id="main-nav" className="navbar fixed-top navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" href="#">H. P. World</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <NavLink to="/houses" className="nav-link" >Houses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/spells" className="nav-link" >Spells</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/characters" className="nav-link" >Characters</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" >Home</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
