import React from "react";
import classes from "./Id.module.css"

const Id = () => {
    return (
        <div className={classes.profile}>
            <button type="button" className={classes.avatarButton}>
                <img src="/img/1551511791_8.jpg" className={classes.avatar} width="90" height="80" alt="Аватар"/>
            </button>
            <div className={classes.infoWrapper}>
                <h2 className={classes.name}>Pavel K.</h2>
                <ul className={classes.info}>
                    <li className={classes.item}>Date of birth: <span
                        className={classes.itemValue}>10th january</span>
                    </li>
                    <li className={classes.item}>City: <span
                        className={classes.itemValue}>Rostov-on-Don</span>
                    </li>
                    <li className={classes.item}>Education: <span
                        className={classes.itemValue}>MTUCI'13</span></li>
                    <li className={classes.item}>Web-site: <span
                        className={classes.itemValue}>www.y4tu.com</span></li>
                </ul>
            </div>
        </div>
    )
};

export default Id;