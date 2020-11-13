import React from "react";
import App from "../App";

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="header__logo-link">
                <div className="header__logo-wrapper">
                    <img src="img/logo.svg" className="header__logo" width="100" height="100" alt="Логотип"/>
                </div>
                <h1 className="header__title">Лайкосеть</h1>
            </a>
        </header>
    )
};

export default Header;
