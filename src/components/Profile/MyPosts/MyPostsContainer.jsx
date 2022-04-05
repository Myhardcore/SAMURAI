import React from "react";
import {addPostHandlerActionCreator, inputChangeHandlerActionCreator} from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        data: state.profilePage,
        input: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostHandlerActionCreator())
        },
        inputChangeHandler: (text) => {
            dispatch(inputChangeHandlerActionCreator(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;