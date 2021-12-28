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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export default store;