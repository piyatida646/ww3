import React from 'react';
import Navbar from'./component/Navbar';

const Nav = () => {
    return(
        <div class="w3-top">
            <div class="w3-bar w3-white w3-wide w3-padding w3-card">
                <a href="#home" class="w3-bar-item w3-button"><b>BR</b> Architects</a>
            <div class="w3-right w3-hide-small">
                <a href="#projects" class="w3-bar-item w3-button">Projects</a>
                <a href="#about" class="w3-bar-item w3-button">About</a>
                <a href="#contact" class="w3-bar-item w3-button">Contact</a>
            </div>
            </div>
        </div>
    )
}

export default Navbar;