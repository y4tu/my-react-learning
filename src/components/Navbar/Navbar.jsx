import React from "react";
import classes from "./Navbar.module.css";
import Item from "./Item/Item";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <Item option="Profile" />
            <Item option="Messages" />
            <Item option="News" />
            <Item option="Music" />
            <Item option="Settings" />
        </nav>

    )
};

export default Navbar;