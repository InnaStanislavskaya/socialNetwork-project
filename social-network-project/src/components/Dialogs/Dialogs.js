import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


let dialogsData = [
    {id: 1, name: 'Inna'},
    {id: 2, name: 'Angela'},
    {id: 3, name: 'Boris'},
    {id: 4, name: 'Dmitriy'},
]

let messagesData = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are you?!"},
    {id: 3, message: "How is your React learning progressing?"},
    
]

let dialogsElement = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
let messagesElement = messagesData.map((message) => <Message message={message.message}/>)


function Dialogs() {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.dialogsMessages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs