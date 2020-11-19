import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <li className={props.user === `Companion` ? `${classes.message} ${classes.opponent}` : `${classes.message}`}>
            <img src={props.avatar} className={classes.avatar} alt='Avatar'/>
            <p className={classes.text}>{props.text}</p>
        </li>
    )
}

export default Message;