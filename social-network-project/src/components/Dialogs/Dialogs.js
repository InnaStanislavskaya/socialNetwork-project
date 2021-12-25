import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


function Dialogs(props) {

    let dialogsElement = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.state.messagesData.map((message) => <Message message={message.message}/>)

    let newMessage = React.createRef()
    let sendMessage = () => {
        let sms = newMessage.current.value;
        alert(sms);

    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.dialogsMessages}>
                {messagesElement}
                <textarea ref={newMessage}></textarea>
                <div className={classes.button}>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs