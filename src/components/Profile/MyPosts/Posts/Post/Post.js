import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={props.image} className={classes.avatar}/>
            <li className={classes.message}>
                {props.message}
            </li>
            <span className={classes.likeCount}>
                {props.likeCount}
            </span>
        </div>
    )
};

export default Post;