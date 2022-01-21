import React from 'react'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer'


function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMassageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return(<Dialogs 
        updateNewMessageBody={onNewMassageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
        />)
}

export default DialogsContainer;