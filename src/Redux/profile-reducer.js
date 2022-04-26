let ADD_POST = 'ADD-POST';
let INPUT_CHANGE = 'INPUT-CHANGE';
let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi,how are you doing?', likesCount: 11},
        {id: 2, message: 'This is my first post', likesCount: 5},
    ],
    inputText: [],
    profile: null
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 5,
                    message: state.inputText,
                    likesCount: 0
                }],
                inputText: ''
            };

        case INPUT_CHANGE:
            return {
                ...state,
                inputText: action.inputText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;

    }
}
export const addPostHandlerActionCreator = () => ({type: ADD_POST})
export const inputChangeHandlerActionCreator = text => ({type: INPUT_CHANGE, inputText: text})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

export default ProfileReducer;