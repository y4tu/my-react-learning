import React from 'react'
import classes from './New-post.module.css'

const NewPost = (props) => {
    return (
        <form className={classes.newPost}>
            <h2 className={classes.title}>Add new post</h2>
            <div className={classes.addNew}>
                <textarea onChange={(evt) =>props.updateNewPostText(evt.target.value)} className={classes.textarea}
                          placeholder="Write your minds!" rows="5" value={props.newPostText}/>
                <button onClick={props.addPost} className={classes.send} type="button">Post it!</button>
            </div>
        </form>
    )
};

export default NewPost;