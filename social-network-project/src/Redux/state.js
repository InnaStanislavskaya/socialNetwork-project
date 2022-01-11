import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state)

    }
}


export default store;