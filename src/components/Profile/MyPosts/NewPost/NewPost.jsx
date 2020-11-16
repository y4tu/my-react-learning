import React from "react";
import classes from "./NewPost.module.css"

const NewPost = () => {
    return (
        <form className={classes.newPost}>
            <h2 className={classes.title}>My posts</h2>
            <div className={classes.addNew}>
                <textarea className={classes.textarea} placeholder="Write your minds!"></textarea>
                <button className={classes.send} type="button"/>
            </div>
        </form>
    )
};

export default NewPost;