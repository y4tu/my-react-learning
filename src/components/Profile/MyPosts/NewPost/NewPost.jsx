import React from "react";
import classes from "./NewPost.module.css"

const NewPost = () => {
    return (
        <form className={classes.newPost}>
            <h2 className={classes.title}>Add new post</h2>
            <div className={classes.addNew}>
                <textarea className={classes.textarea} name="message" placeholder="Write your minds!" rows="10"></textarea>
                <button className={classes.send} type="button">Post it!</button>
            </div>
        </form>
    )
};

export default NewPost;