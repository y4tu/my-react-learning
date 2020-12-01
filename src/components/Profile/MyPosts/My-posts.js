import React from 'react';
import classes from './My-posts.module.css'
import NewPostContainer from './NewPost/New-post-container';
import PostsContainer from "./Posts/Posts-container";

const MyPosts = () => {
    return (
        <div className={classes.news}>
            <NewPostContainer/>
            <PostsContainer/>
        </div>
    )
};

export default MyPosts;