import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer'


function Dialogs(props) {

    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = state.messagesData.map((message) => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMassageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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