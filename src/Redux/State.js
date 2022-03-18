let state = {
    profilePage: {
        postsData: [{id: 1, message: 'Hi,how are you doing?', likesCount: 11},
            {id: 2, message: 'This is my first post', likesCount: 5},
        ],
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
        ]
    },
    sideBar:
        [
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'}
        ]
}

export default state;