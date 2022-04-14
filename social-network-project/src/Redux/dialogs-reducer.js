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
}

const dialogsReducer = (state = initialState, action) => {
    

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: body}],
            }
        default:
            return state;
    }
}

export let sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;