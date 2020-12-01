import React from 'react';
import classes from './Messages.module.css'
import Message from './Message/Message';
import NewMessageContainer from "./New-message/New-message-container";

const Messages = (props) => {
    const renderMessages = props.messagesData.map(item =>
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
            <NewMessageContainer store={props.store}/>
        </div>
    )
};

export default Messages;