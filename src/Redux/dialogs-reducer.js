let ADD_MESSAGE = 'ADD-MESSAGE';
let MESSAGE_CHANGE = 'MESSAGE-CHANGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    messageInput: [],
}
const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 8,
                message: state.messageInput,
            }
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            stateCopy.messageInput = '';
            return stateCopy;
        }
        case MESSAGE_CHANGE: {
            let stateCopy = {...state}
            stateCopy.messageInput = action.msgInput;
            return stateCopy
        }
        default:
            return state;
    }
}

export const sendMessageHandlerActionCreator = () => ({type: ADD_MESSAGE})
export const messageChangeHandlerActionCreator = msgText => ({type: MESSAGE_CHANGE, msgInput: msgText})

export default DialogsReducer;