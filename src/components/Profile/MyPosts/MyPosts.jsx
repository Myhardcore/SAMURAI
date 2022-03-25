import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostHandlerActionCreator, inputChangeHandlerActionCreator} from "../../../Redux/profile-reducer"


const MyPosts = props => {

    let newPostElement = React.createRef()
    let addPostHandler = () => {
        props.dispatch(addPostHandlerActionCreator())
    }

    let postsElements = props.data.map(post => <Post message={post.message} count={post.likesCount} key={post.id}/>)

    let inputChangeHandler = () => {
        let text = newPostElement.current.value
        props.dispatch(inputChangeHandlerActionCreator(text))

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.input} onChange={inputChangeHandler} ref={newPostElement}/>
                </div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;