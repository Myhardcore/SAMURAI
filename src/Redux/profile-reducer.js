let ADD_POST = 'ADD-POST';
let INPUT_CHANGE = 'INPUT-CHANGE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi,how are you doing?', likesCount: 11},
        {id: 2, message: 'This is my first post', likesCount: 5},
    ],
    inputText: []
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.inputText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.inputText = '';
            return state;

        case INPUT_CHANGE:
            state.inputText = action.inputText;
            return state;
        default:
            return state;
    }

}
export const addPostHandlerActionCreator = () => ({type: ADD_POST})
export const inputChangeHandlerActionCreator = text => ({type: INPUT_CHANGE, inputText: text})

export default ProfileReducer;