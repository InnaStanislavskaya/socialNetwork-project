const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Inna'},
        {id: 2, name: 'Angela'},
        {id: 3, name: 'Boris'},
        {id: 4, name: 'Dmitriy'},
    ],
    messagesData: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?!"},
        {id: 3, message: "How is your React learning progressing?"},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 4, message: body})
            return state;
        default:
            return state;
    }

}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE})
export let updateNewMessageBodyCreator = (body) =>
        ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;