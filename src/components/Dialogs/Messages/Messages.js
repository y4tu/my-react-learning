import React from 'react';
import classes from './Messages.module.css'
import Message from './Message/Message';

const Messages = (props) => {
    const renderMessages = props.MessagesData.map(item => <Message
        key={item.COUNTER.toString()}
        user={item.USER}
        avatar={item.AVATAR}
        text={item.MESSAGE}
    />);

    return (
        <ul className={classes.messages}>
            {renderMessages}
        </ul>
    )
}

export default Messages;