import React from 'react';
import classes from './Item.module.css'

const Item = (props) => {
    return (
        <li className={classes.item}>
            <span className={classes.itemProperty}>{props.property}</span>
            <span className={classes.itemValue}>{props.value}</span>
        </li>
    )
};

export default Item;