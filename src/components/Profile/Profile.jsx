import React from "react";
import classes from "./Profile.module.css"
import Wallpaper from "./Wallpaper/Wallpaper";
import Id from "./Id/Id";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <section className={classes.content}>
            <Wallpaper/>
            <Id/>
            <MyPosts/>
        </section>
    )
};

export default Profile;