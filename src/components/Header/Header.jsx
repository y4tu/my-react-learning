import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <a href="#" className={classes.logoLink}>
                <div className={classes.logoWrapper}>
                    <img src="/img/logo.svg" className={classes.logo} width="100" height="100" alt="Логотип"/>
                </div>
                <h1 className={classes.title}>Лайкосеть</h1>
            </a>
        </header>
    )
};

export default Header;
