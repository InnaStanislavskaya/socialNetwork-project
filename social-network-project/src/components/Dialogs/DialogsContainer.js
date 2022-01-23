import React from 'react'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer'
import StoreContext from '../../StoreContext';


function DialogsContainer(props) {

    return <StoreContext.Consumer> 
        {(store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMassageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMassageChange} sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;