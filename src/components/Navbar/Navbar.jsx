import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const active = navData => navData.isActive ? classes.active : classes.item; //делаем ссылки золотыми, когда они активны

    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
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
        </nav>
    )
}


export default Navbar;