import React from "react";
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.dialog_ava}
                 src="https://i0.wp.com/freehindiwishes.com/wp-content/uploads/2020/10/Best-DP-Pics-of-Indian-Girls-12.jpg?resize=400%2C400"
                 alt=""/>
            <NavLink to={path}> {props.name} </NavLink>

        </div>
    )
}


export default DialogItem;