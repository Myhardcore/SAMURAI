import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = props => {

    let newPostElement = React.createRef()
    let addPostHandler = () => {
        props.addPost()
    }

    let postsElements = props.data.postsData.map(post => <Post message={post.message} count={post.likesCount}
                                                               key={post.id}/>)

    let inputChangeHandler = () => {
        let text = newPostElement.current.value
        props.inputChangeHandler(text)

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.input.inputText} onChange={inputChangeHandler} ref={newPostElement}/>
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