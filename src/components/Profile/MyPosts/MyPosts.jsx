import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi,how are you doing?', likesCount: 11},
        {id: 2, message: 'This is my first post', likesCount: 5},
    ];

    let postsElements = postsData.map(post => <Post message={post.message} count={post.likesCount} key={post.id}/>)
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