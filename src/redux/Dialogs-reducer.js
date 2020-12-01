const ActionTypes = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
};

const initialState = {
    CompanyData: [
        {AVATAR: `/img/man.jpg`, NAME: `Happy Gilmore`, ROUTE: `/dialogs/happy`},
        {AVATAR: `/img/starlord.jpg`, NAME: 'Chris Pratt', ROUTE: `/dialogs/starlord`},
        {AVATAR: `/img/einstein.png`, NAME: `Albert Einstein`, ROUTE: `/dialogs/einstein`},
        {AVATAR: `/img/anonymous.jpg`, NAME: `Anonymous`, ROUTE: `/dialogs/anonymous`}
    ],
    MessagesData: [
        {COUNTER: 0, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Hi!`},
        {COUNTER: 1, USER: `Companion`, AVATAR: `/img/starlord.jpg`, MESSAGE: `Hallo!`},
        {COUNTER: 2, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Hay, what's problem with Gamora?`},
        {COUNTER: 3, USER: `Companion`, AVATAR: `/img/starlord.jpg`, MESSAGE: `I don't want talk about that!!!`},
        {COUNTER: 4, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Okay, just relax, man!`},
        {COUNTER: 5, USER: `Companion`, AVATAR: `/img/starlord.jpg`, MESSAGE: `Sorry. Unpleasant topic...`},
        {COUNTER: 6, USER: `Me`, AVATAR: `/img/1551511791_8.jpg`, MESSAGE: `Understand you...`}
    ],
    NewMessageText: ``
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, NewMessageText: action.newMessageText};
        }

        case ActionTypes.ADD_MESSAGE: {
            let newMessage = {
                COUNTER: state.MessagesData.length,
                USER: `Me`,
                AVATAR: `/img/1551511791_8.jpg`,
                MESSAGE: state.NewMessageText
            };

            return {...state, MessagesData: [...state.MessagesData, newMessage], NewMessageText: ``};
        }

        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ActionTypes.ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: ActionTypes.UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
});

export default dialogsReducer;