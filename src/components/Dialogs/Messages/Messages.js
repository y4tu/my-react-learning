import React from 'react';
import classes from './Messages.module.css'
import Message from './Message/Message';
import Textarea from "./Textarea/Textarea";

const Messages = (props) => {
    const renderMessages = props.MessagesData.map(item =>
        <Message
            key={item.COUNTER.toString()}
            user={item.USER}
            avatar={item.AVATAR}
            text={item.MESSAGE}
        />);

    return (
        <div className={classes.messages}>
            <ul className={classes.messagesHistory}>
                {renderMessages}
            </ul>
            <Textarea
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
            />
        </div>
    )
}

export default Messages;