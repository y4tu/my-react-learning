import React from 'react'
import classes from './NewPost.module.css'

const NewPost = (props) => {

    const newPostElement = React.createRef();

    const onTextareaChange = () => {
        let text = newPostElement.current.value;

        props.updateNewPostText(text);
    };

    const onButtonClick = () => {
        props.addPost();

        newPostElement.current.value = props.updateNewPostText(``);
    };

    return (
        <form className={classes.newPost}>
            <h2 className={classes.title}>Add new post</h2>
            <div className={classes.addNew}>
                <textarea onChange={onTextareaChange} ref={newPostElement} className={classes.textarea}
                          placeholder="Write your minds!" rows="5"/>
                <button onClick={onButtonClick} className={classes.send} type="button">Post it!</button>
            </div>
        </form>
    )
};

export default NewPost;