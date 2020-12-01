import React from 'react';
import classes from './New-message.module.css'

const NewMessage = (props) => {
    return (
        <form className={classes.form}>
            <textarea onChange={(evt) => props.updateNewMessageText(evt.target.value)} rows='5' className={classes.messageText}
                      placeholder='Print new message!' value={props.newMessageText}/>
            <button onClick={props.addMessage} type='button' className={classes.sendButton}>Send message!</button>
        </form>
    );
};

export default NewMessage;
