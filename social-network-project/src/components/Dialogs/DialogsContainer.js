import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/AuthRedirect'
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

