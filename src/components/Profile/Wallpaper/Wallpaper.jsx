import React from "react";
import classes from "./Wallpaper.module.css"
import Global from "../../../App.css";

const Wallpaper = () => {
    return (
        <button type="button" className={classes.imageButton}>
            <img src="/img/mercedes___logo_home-1200x200.jpg" className={classes.image} width="1200" height="200"
                 alt="Картинка"/>
        </button>
    )
};

export default Wallpaper;