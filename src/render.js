import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderEntireTree = (state, addPost, addMessage, updateNewPostText, updateNewMessageText) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
