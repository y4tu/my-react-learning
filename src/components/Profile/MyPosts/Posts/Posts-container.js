import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        postsData: state.ProfilePage.PostsData
    }
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;