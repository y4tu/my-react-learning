import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
    return (
        <a href="#" className={classes.navLink}>
            { props.option }
        </a>
    )
};

export default Item;