import React from 'react';
import classes from './Dialogs.module.css'
import Title from '../Title/Title';
import CompanyContainer from "./Company/Company-container";
import MessagesContainer from "./Messages/Messages-container";

const Dialogs = (props) => {
    return (
        <section className={classes.dialogs}>
            <Title title="Dialogs"/>
            <CompanyContainer store={props.store}/>
            <MessagesContainer store={props.store}/>
        </section>
    )
}

export default Dialogs;