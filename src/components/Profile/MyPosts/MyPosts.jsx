import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = props => {
    let text = React.createRef()
    let addPostHandler = () => {
      props.addPost(text.current.value)
        text.current.value = '';
    }

    let postsElements = props.data.map(post => <Post message={post.message} count={post.likesCount} key={post.id}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={text}></textarea>
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