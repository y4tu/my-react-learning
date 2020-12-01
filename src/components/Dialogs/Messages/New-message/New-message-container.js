import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/Dialogs-reducer";
import NewMessage from "./New-message";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.DialogsPage.NewMessageText,
        messagesData: state.DialogsPage.MessagesData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;