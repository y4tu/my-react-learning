import React from 'react';
import classes from './Textarea.module.css'

const Textarea = (props) => {
    const newMessageElement = React.createRef();

    const onTextareaChange = () => {
        let text = newMessageElement.current.value;

        props.updateNewMessageText(text);
    };

    const onButtonClick = () => {
        props.addMessage();

        newMessageElement.current.value = props.updateNewMessageText(``);
    };

    return (
        <form className={classes.form}>
            <textarea onChange={onTextareaChange} ref={newMessageElement} rows='5' className={classes.messageText}
                      placeholder='Print new message!'></textarea>
            <button onClick={onButtonClick} type='button' className={classes.sendButton}>Send message!</button>
        </form>
    );
};

export default Textarea;