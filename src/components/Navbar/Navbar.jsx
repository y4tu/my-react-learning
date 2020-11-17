import React from "react";
import classes from "./Navbar.module.css";
import Item from "./Item/Item";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <Item route="/profile" option="Profile" />
            <Item route="/dialogs" option="Dialogs" />
            <Item route="/news" option="News" />
            <Item route="/music" option="Music" />
            <Item route="/settings" option="Settings" />
        </nav>

    )
};

export default Navbar;