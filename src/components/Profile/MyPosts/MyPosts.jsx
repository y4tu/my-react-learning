import React from "react";
import classes from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (
        <div className={classes.news}>
            <NewPost />
            <Posts />
        </div>
    )
};

export default MyPosts;