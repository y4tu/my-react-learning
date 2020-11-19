import React from 'react';
import classes from './Dialogs.module.css'
import Company from './Company/Company';
import Messages from './Messages/Messages';
import Title from '../Title/Title';

const Dialogs = (props) => {
    return (
        <section className={classes.dialogs}>
            <Title title="Dialogs"/>
            <Company CompanyData={props.state.CompanyData}/>
            <Messages MessagesData={props.state.MessagesData}/>
        </section>
    )
}

export default Dialogs;