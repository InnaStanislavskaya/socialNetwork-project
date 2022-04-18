import {getAuthUserData} from "../Redux/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true,
                
            }
        default:
            return state;
    }
}

export let InitializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export let initializeApp = () => {
    return (dispatch) => {
        let promiss = dispatch(getAuthUserData());
        promiss.then(() => {
            dispatch(InitializedSuccess());
        })
    }
}

export default appReducer;