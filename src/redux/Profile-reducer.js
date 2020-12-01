const ActionTypes = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
};

const initialState = {
    IdData: [
        {PROPERTY: `Date of Birth: `, VALUE: `10th January`},
        {PROPERTY: `City: `, VALUE: `Rostov-on-Don`},
        {PROPERTY: `Education: `, VALUE: `MTUCI'13`},
        {PROPERTY: `Web Site: `, VALUE: `https://www.y4tu.com`},
    ],
    PostsData: [
        {COUNTER: 0, AVATAR: `/img/starlord.jpg`, MESSAGE: `Hi! How are you?`, LIKE_COUNT: `1 Likes`},
        {
            COUNTER: 1,
            AVATAR: `/img/1551511791_8.jpg`,
            MESSAGE: `I\`m starting use this social.`,
            LIKE_COUNT: `13 Likes`
        },
        {
            COUNTER: 2,
            AVATAR: `/img/1551511791_8.jpg`,
            MESSAGE: `Somebody, send me some music.`,
            LIKE_COUNT: `23 Likes`
        },
        {
            COUNTER: 3,
            AVATAR: `/img/einstein.png`,
            MESSAGE: `What do you think about this social?`,
            LIKE_COUNT: `7 Likes`
        }
    ],
    NewPostText: ``
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_NEW_POST_TEXT: {
            return {...state, NewPostText: action.newPostText};
        }
        case ActionTypes.ADD_POST: {
            let newPost = {
                COUNTER: state.PostsData.length,
                AVATAR: `/img/1551511791_8.jpg`,
                MESSAGE: state.NewPostText,
                LIKE_COUNT: `0 Likes`
            };

            return {...state, PostsData: [...state.PostsData, newPost], NewPostText: ``};
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ActionTypes.ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: ActionTypes.UPDATE_NEW_POST_TEXT, newPostText: text
});

export default profileReducer;