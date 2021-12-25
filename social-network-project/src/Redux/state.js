import { rerenderEntireTree } from "../render"

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state