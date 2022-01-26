const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: "Hello! It is my first post", likeCount: "104"},
        {id: 2, message:  "How are you?", likeCount: "98"},
    ],
    newPostText: 'write a post',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export let addPostActionCreator = () => ({ type: ADD_POST})
export let updateNewPostTextActionCreator = (text) =>
        ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;