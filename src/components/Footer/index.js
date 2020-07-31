import React from 'react';
import { FooterBase } from './styles';
import AIcon from '../../assets/img/airton_icon.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img class="Logo" src={AIcon} alt="Airton icon" />
      </a>
      <h5>
        Criado durante a #ImersaoReact
      </h5>
    </FooterBase>
  );
}

export default Footer;
