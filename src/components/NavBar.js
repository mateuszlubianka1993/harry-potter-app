import React from 'react';

const NavBar = () => {
    return(
        <nav id="main-nav" class="navbar fixed-top navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">H. P. World</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav ml-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" >Houses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Spels</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Characters</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
