import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'


function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}





function Dialogs() {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Inna" id="1"/>
                <DialogItem name="Angela" id="2"/>
                <DialogItem name="Boris" id="3"/>
                <DialogItem name="Dmitriy" id="4"/>
            </div>
            <div className={classes.dialogsMessages}>
                <Message message="Hello!"/>
                <Message message="How are you?!"/>
                <Message message="How is your React learning progressing?"/>

            </div>
        </div>
    )
}

export default Dialogs