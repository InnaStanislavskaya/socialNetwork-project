const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://i.pinimg.com/474x/86/df/9f/86df9f89ea6fb42b4655036db001f717.jpg',
            followed: false, fullName: 'Inna', status: 'I am a girl', location: {city: 'Kharkiv', country: 'Ukrain'}},
        {id: 2, photoUrl: 'https://i.pinimg.com/474x/86/df/9f/86df9f89ea6fb42b4655036db001f717.jpg',
            followed: true, fullName: 'Daniel', status: 'I am a boy', location: {city: 'Kharkiv', country: 'Ukrain'}},
        {id: 3, photoUrl: 'https://i.pinimg.com/474x/86/df/9f/86df9f89ea6fb42b4655036db001f717.jpg',
            followed: false, fullName: 'Bonya', status: 'I am a cat', location: {city: 'Minsk', country: 'Belarus'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.user]}
        }
        default:
            return state;
    }

}

export let followAC = (userId) => ({ type: FOLLOW, userId})
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId})
export let setUsersAC = (users) => ({ type: SET_USERS, users})

export default usersReducer;