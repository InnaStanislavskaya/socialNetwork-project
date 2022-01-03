const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hello! It is my first post", likeCount: "104"},
                {id: 2, message:  "How are you?", likeCount: "98"},
            ],
            newPostText: 'write a post',
        },
        dialogsPage: {
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
        },
        sideBar: {},
    },
    _callSubscriber() {
        console.log('hello!')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 4, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST})
export let updateNewPostTextActionCreator = (text) =>
        ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export let sendMessageCreator = () => ({ type: SEND_MESSAGE})
export let updateNewMessageBodyCreator = (body) =>
        ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;