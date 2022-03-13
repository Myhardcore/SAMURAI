import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
return (
    <div className={classes.content}>
        <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt="" />
        <div>ava+description</div>
      <div>My post
        <div>New post</div>
      </div>
      <div className={classes.posts}></div>
      <div className={classes.item}>post 1</div>
      <div className={classes.item}>post 2</div>
      </div>
)
}
export default Profile;