import React from 'react';
import classes from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const MyPosts = (props) => {
    return (
        <div className={classes.news}>
            <NewPost addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     NewPostText={props.NewPostText}
            />
            <Posts PostsData={props.PostsData}/>
        </div>
    )
};

export default MyPosts;