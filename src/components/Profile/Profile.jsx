import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let postsData = [
        {id: 1, message: 'Hi,how are you doing?', likesCount: 11},
        {id: 2, message: 'This is my first post', likesCount: 5},
    ];
    return (
        <div>
            <ProfileInfo/>
            <MyPosts data={postsData}/>
        </div>
    )
}
export default Profile;

