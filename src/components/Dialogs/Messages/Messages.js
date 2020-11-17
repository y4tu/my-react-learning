import React from "react";
import classes from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = (props) => {
    return (
            <ul className={classes.messages}>
                <Message user="Me" avatar="/img/1551511791_8.jpg" text="Hi!"/>
                <Message user="Chris" avatar="/img/starlord.jpg" text="Hallo!"/>
                <Message user="Me" avatar="/img/1551511791_8.jpg" text="Hay, what's problem with Gamora?"/>
                <Message user="Chris" avatar="/img/starlord.jpg" text="I don't want talk about that!!!"/>
                <Message user="Me" avatar="/img/1551511791_8.jpg" text="Okay, just relax, man!"/>
                <Message user="Chris" avatar="/img/starlord.jpg" text="Sorry. Unpleasant topic..."/>
                <Message user="Me" avatar="/img/1551511791_8.jpg" text="Understand you..."/>
            </ul>
    )
}

export default Messages;