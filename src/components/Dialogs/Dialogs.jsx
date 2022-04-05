import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = props => {

    let dialogsElements = props.dialogsData.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                                  key={dialog.id}/>)
    let messagesElements = props.messagesData.messagesData.map(message => <Message message={message.message}
                                                                                   key={message.id}/>)

    let messageText = React.createRef();

    let sendMessageHandler = () => {
        props.sendMessage();
    }
    let messageChangeHandler = () => {
        let msgText = messageText.current.value
        props.messageChange(msgText)
    }

    //RET
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea value={props.msgInput.messageInput} ref={messageText} onChange={messageChangeHandler}/>
                <button onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )

}

export default Dialogs;