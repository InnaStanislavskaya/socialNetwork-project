import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {reduxForm, Field} from 'redux-form';


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElement = state.messagesData.map((message) => <Message message={message.message} key={message.id}/>)

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.dialogsMessages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageBody"} placeholder={'Enter your message'} component={"textarea"} />
            </div>
            <div className={classes.button}>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs