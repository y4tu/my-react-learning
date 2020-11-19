import React from 'react';
import classes from './Navbar.module.css';
import Item from './Item/Item';
import NavbarData from "./NavbarData";

const Navbar = () => {
    const renderNavbar = NavbarData.map(item => <Item
        key={item.OPTION.toString()}
        route={item.ROUTE}
        option={item.OPTION}/>);

    return (
        <nav className={classes.nav}>
            {renderNavbar}
        </nav>
    )
};

export default Navbar;