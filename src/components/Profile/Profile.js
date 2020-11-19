import React from 'react';
import classes from './Profile.module.css'
import Wallpaper from './Wallpaper/Wallpaper';
import Id from './Id/Id';
import MyPosts from './MyPosts/MyPosts';
import Title from '../Title/Title';

const Profile = (props) => {
    return (
        <section className={classes.content}>
            <Title className="visually-hidden" title="Profile"/>
            <Wallpaper/>
            <Id IdData={props.state.IdData}/>
            <MyPosts PostsData={props.state.PostsData}/>
        </section>
    )
};

export default Profile;