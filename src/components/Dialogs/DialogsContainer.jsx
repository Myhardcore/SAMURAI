import React from "react";
import {messageChangeHandlerActionCreator, sendMessageHandlerActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        msgInput: state.messagesPage,
        dialogsData: state.messagesPage,
        messagesData: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageHandlerActionCreator())
        },
        messageChange: (msgText) => {
            dispatch(messageChangeHandlerActionCreator(msgText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;