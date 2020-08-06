import React from 'react';
import Icon from '../../assets/img/Icon.jpg';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <nav className="Menu">
        <Link to="/">
            <img class="Logo" src={Logo} alt="Djokolol logo" />
            <img class="Icon" src={Icon} alt="Djokolol icon" />
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
        </Button>
        </nav>
    );
}

export default Menu;