import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = props => {


    let postsElements = props.data.map(post => <Post message={post.message} count={post.likesCount} key={post.id}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;