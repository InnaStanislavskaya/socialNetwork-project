import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/AuthRedirect'



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
            
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;