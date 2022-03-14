import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My post
                <div>New post</div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi,how are you doing?' count='10'/>
                <Post message='This is my first post' count='5'/>

            </div>
        </div>
    )
}
export default MyPosts;