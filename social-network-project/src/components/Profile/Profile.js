import React from 'react';
import classes from './Profile.module.css';
import uzor from './images/uzory.jpg'
import MyPosts from './MyPosts/MyPosts';

function Profile () {
    return (
        <div> 
            <div className={classes.content}>
                <div><img src={uzor} alt='uzor'></img></div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile