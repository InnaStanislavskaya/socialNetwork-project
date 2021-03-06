import {profileAPI, usersAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: "Hello! It is my first post", likeCount: "104"},
        {id: 2, message:  "How are you?", likeCount: "98"},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export let addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_STATUS, status})

export let getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}
export let getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export let updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;