import React from 'react';
import classes from './Companion.module.css'
import {NavLink} from 'react-router-dom';

const Companion = (props) => {
    return (
        <NavLink to={props.route} activeClassName={classes.active} className={classes.companionLink}>
            <li className={classes.item}>
                <img src={props.avatar} className={classes.avatar} width="50" height="50"/>
                <span className={classes.name}>
                        {props.name}
                </span>
            </li>
        </NavLink>
    )
}

export default Companion;