import {connect} from "react-redux";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return {
        messagesData: state.DialogsPage.MessagesData
    }
};

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;