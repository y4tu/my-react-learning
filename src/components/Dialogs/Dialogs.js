import React from "react";
import classes from "./Dialogs.module.css"
import Company from "./Company/Company";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <section className={classes.dialogs}>
            <h2 className={classes.title}>Dialogs</h2>
            <Company/>
            <Messages/>
        </section>
    )
}

export default Dialogs;