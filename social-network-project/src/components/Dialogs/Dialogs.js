import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElement = state.messagesData.map((message) => <Message message={message.message} key={message.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMassageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
        
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.dialogsMessages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea 
                            value={newMessageBody} 
                            placeholder='Enter your message' 
                            onChange={onNewMassageChange}
                        ></textarea>
                    </div>
                    <div className={classes.button}>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs