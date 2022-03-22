let renderEntireTree = () => {

}
let state = {
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
    sideBar:
        [
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'}
        ]
}
//comm Добавляем пост

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.inputText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.inputText = ''
    renderEntireTree(state);
}
//comm Отслеживаем ввод текста в посте

export let inputChange = (inputText) => {
    state.profilePage.inputText = inputText;
    renderEntireTree(state)
}

//comm Добавляем сообщение

export let addMessage = () => {
    let newMessage = {
        id: 8,
        message: state.messagesPage.messageInput,
    }
    state.messagesPage.messagesData.push(newMessage)
    state.messagesPage.messageInput = '';
    renderEntireTree(state);
}
//comm Отслеживаем ввод текста в сообщении

export let messageChange = (msgInput) => {
    state.messagesPage.messageInput = msgInput;
    renderEntireTree(state)
}

// comm создаем observer для рендера (pattern)

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;