import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data,
                
            }
        default:
            return state;
    }
}

export let SetAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export let getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(SetAuthUserData(id, email, login, true));
                }
            });
    }
} 
export let login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
            });
    }
} 
export let logout = () => {
    return (dispatch) => {
        authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetAuthUserData(null, null, null, false));
                }
            });
    }
} 

export default authReducer;