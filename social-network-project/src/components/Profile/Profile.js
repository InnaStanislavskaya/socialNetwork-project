import React from 'react';
// import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Navigate} from 'react-router-dom';


function Profile (props) {
    // if (!props.isAuth) return <Navigate to ={'/login'}/>;

    return (
        <div> 
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile