import React from 'react';
import classes from './Navbar.module.css';
import Item from './Item/Item';

const Navbar = (props) => {
    const renderNavbar = props.navbarData.map(item => <Item
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