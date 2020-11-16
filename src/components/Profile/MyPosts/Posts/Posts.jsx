import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    return (
            <ul className={classes.posts}>
                <Post image="/img/starlord.jpg" message="Hi! How are you?" likeCount="1 Likes"/>
                <Post image="/img/1551511791_8.jpg" message="I`m starting use this social." likeCount="13 Likes"/>
                <Post image="/img/1551511791_8.jpg" message="Somebody, send me some music." likeCount="23 Likes"/>
                <Post image="/img/einstein.png" message="What do you think about this social?" likeCount="7 Likes"/>
            </ul>
    )
};

export default Posts;