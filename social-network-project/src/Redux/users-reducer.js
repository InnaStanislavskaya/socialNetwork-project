import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_PROGRESS = 'TOGGLE_IS_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

}

export let followSuccess = (userId) => ({ type: FOLLOW, userId})
export let unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId})
export let setUsers = (users) => ({ type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export let toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.requestUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
            usersAPI.followUsers(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(followSuccess(userId));
                    }
                    dispatch(toggleFollowingProgress(false, userId))
                });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
            usersAPI.unfollowUsers(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unfollowSuccess(userId));
                    }
                    dispatch(toggleFollowingProgress(false, userId))
                });
    }
}

export default usersReducer; 