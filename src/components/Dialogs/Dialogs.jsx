import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = props => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                            key={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}
                                                                            key={message.id}/>)
    let messageText = React.createRef();
    let sendMessageHandler = () => {
        console.log(messageText.current.value)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={messageText}></textarea>
                <button onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;