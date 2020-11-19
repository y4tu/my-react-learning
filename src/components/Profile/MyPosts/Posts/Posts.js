import React from 'react';
import classes from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
    const renderPosts = props.PostsData.map(item => <Post
        key={item.COUNTER.toString()}
        image={item.AVATAR}
        message={item.MESSAGE}
        likeCount={item.LIKE_COUNT}/>);

    return (
            <ul className={classes.posts}>
                {renderPosts}
            </ul>
    )
};

export default Posts;