import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = props => {
    const active = navData => navData.isActive ? classes.active : classes.item; //делаем ссылки золотыми, когда они активны
    /*let FriendsPreview = props.state.map(friend => <div className={classes.innerFriends}><img
        className={classes.friendsImg}
        src="data:image/jpeg;base64,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"
        alt=""/>{friend.name}</div>)*/
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink className={active} to="/profile"> Profile </NavLink>
            </div>
            <div>
                <NavLink className={active} to="/dialogs"> Messages </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={active} to='/news'> News </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={active} to='/music'> Music </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={active} to='/settings'> Settings </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={active} to='/users'> Users </NavLink>
            </div>
            {/*<div className={classes.item}>
                <NavLink className={active} to='/friends'> Friends </NavLink>
                <div className={classes.friends}>
                    {FriendsPreview}
                </div>
            </div>*/}
        </nav>
    )
}


export default Navbar;