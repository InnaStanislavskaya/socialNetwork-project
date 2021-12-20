import React from 'react';
import classes from './Profile.module.css';
import uzor from './images/uzory.jpg'

function Profile () {
    return (
        <div className={classes.profile}> 
            <div className={classes.content}>
                <div><img src={uzor} alt='uzor'></img></div>
            </div>
        </div>
    )
}

export default Profile