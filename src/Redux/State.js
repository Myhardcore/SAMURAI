let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi,how are you doing?', likesCount: 11},
                {id: 2, message: 'This is my first post', likesCount: 5},
            ],
            inputText: []
        },
        messagesPage: {
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
        },
        sideBar: [
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'}
        ]
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.inputText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.inputText = ''
            this._callSubscriber(this._state);
        } else if (action.type === INPUT_CHANGE) {
            this._state.profilePage.inputText = action.inputText;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 8,
                message: this._state.messagesPage.messageInput,
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.messageInput = '';
            this._callSubscriber(this._state);
        } else if (action.type === MESSAGE_CHANGE) {
            this._state.messagesPage.messageInput = action.msgInput;
            this._callSubscriber(this._state)
        }
    },
}

let ADD_POST = 'ADD-POST';
let INPUT_CHANGE = 'INPUT-CHANGE';
let ADD_MESSAGE = 'ADD-MESSAGE';
let MESSAGE_CHANGE = 'MESSAGE-CHANGE';

export const addPostHandlerActionCreator = () => ({type: ADD_POST})
export const inputChangeHandlerActionCreator = text => ({type: INPUT_CHANGE, inputText: text})
export const sendMessageHandlerActionCreator = () => ({type: ADD_MESSAGE})
export const messageChangeHandlerActionCreator = msgText => ({type: MESSAGE_CHANGE, msgInput: msgText})

export default store;
window.store = store;