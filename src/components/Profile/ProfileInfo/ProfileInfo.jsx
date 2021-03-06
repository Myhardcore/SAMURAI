import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img
                src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg"
                alt=""/>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;