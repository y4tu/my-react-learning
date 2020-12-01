import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/Profile-reducer";
import NewPost from "./New-post";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.NewPostText,
        postsData: state.ProfilePage.PostsData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;