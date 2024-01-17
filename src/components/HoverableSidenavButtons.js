import React from "react";
import '../styles/HoverableSidenavButtons.css'

function HoverableSidenavButtons() {
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#home" id="main1">Головна</a>
            <a href="#aboutUs" id="aboutUs2">Про нас</a>
            <a href="#delivery" id="delivery3">Доставка</a>
            <a href="#contact" id="contact4">Контакти</a>
        </div>
    );
}

export default HoverableSidenavButtons;
