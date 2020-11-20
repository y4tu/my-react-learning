import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from "./render";
import state, {addMessage, addPost, updateNewPostText, updateNewMessageText} from "./redux/state";

renderEntireTree(state, addPost, addMessage, updateNewPostText, updateNewMessageText);
reportWebVitals();
