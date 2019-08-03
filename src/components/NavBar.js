import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav id="main-nav" className="navbar fixed-top navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">H. P. World</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <Link to="/houses" className="nav-link" >Houses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/spells" className="nav-link" >Spells</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/characters" className="nav-link" >Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
