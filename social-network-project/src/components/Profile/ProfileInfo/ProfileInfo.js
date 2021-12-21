import React from 'react';
import classes from './ProfileInfo.module.css';
import uzor from '../images/uzory.jpg'


function ProfileInfo () {
    return (
        <div className={classes.content}>
            <div><img src={uzor} alt='uzor'></img></div>
        </div>
    )
}

export default ProfileInfo