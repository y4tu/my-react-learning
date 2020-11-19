import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Item.module.css'

const Item = (props) => {
    return (
        <NavLink to={props.route} className={classes.navLink}>
            {props.option}
        </NavLink>
    )
};

export default Item;