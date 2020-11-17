import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
    return (
        <li className={classes.message}>
            <img src={props.avatar} className={classes.avatar}/>
            <p className={classes.text}>{props.text}</p>
        </li>
    )
}

export default Message;