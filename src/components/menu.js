import React from 'react';
import './menu.css';

const Menu = () => (
    <nav className="menu">
        <ul>
            <li>
                <a href="#date">Data</a>
            </li>
            <li>
                <a href="#address">Endereço</a>
            </li>
            <li>
                <a href="#gifts">Lista de <br /> presentes</a>
            </li>
        </ul>
    </nav>    
);

export default Menu;