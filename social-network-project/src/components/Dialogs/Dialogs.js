import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators';
import { ElementForm } from '../common/FormsControls/FormsControls';


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
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageBody"} placeholder={'Enter your message'} 
                    component ={ElementForm} typeForm={"textarea"} validate ={[required, maxLength50]} />
            </div>
            <div className={classes.button}>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs