import React from 'react';
import Icon from '../../assets/img/Icon.jpg';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return(
        <nav className="Menu">
        <a href="/">
            <img class="Logo" src={Logo} alt="Djokolol logo" />
            <img class="Icon" src={Icon} alt="Djokolol icon" />
        </a>
        <Button className="ButtonLink" href="/">
            Novo Vídeo
        </Button>
        </nav>
    );
}

export default Menu;