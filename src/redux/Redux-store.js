import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import navbarReducer from "./Navbar-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NavbarData: navbarReducer
});

let store = createStore(reducers);

export default store;