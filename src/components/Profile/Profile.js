import React from 'react';
import classes from './Profile.module.css'
import Wallpaper from './Wallpaper/Wallpaper';
import MyPosts from './MyPosts/My-posts';
import Title from '../Title/Title';
import IdContainer from "./Id/Id-container";

const Profile = () => {
    return (
        <section className={classes.content}>
            <Title className="visually-hidden" title="Profile"/>
            <Wallpaper/>
            <IdContainer/>
            <MyPosts/>
        </section>
    )
};

export default Profile;