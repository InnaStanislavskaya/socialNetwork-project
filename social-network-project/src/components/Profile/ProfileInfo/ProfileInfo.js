import React from 'react';
import classes from './ProfileInfo.module.css';
import uzor from '../images/uzory.jpg'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>Loading</div>
    }

    return (
        <div className={classes.content}>
            <div><img src={uzor} alt='uzor'></img></div>
            <div>
                <div>aboutMe:{props.profile.aboutMe}</div>
                <div>facebook: {props.profile.contacts.facebook}</div>
                <div>github: {props.profile.contacts.github}</div>
                <div>instagram: {props.profile.contacts.instagram}</div>
            </div>
            <img src={props.profile.photos.small} className={classes.photo}/>
        </div>
    )
}

export default ProfileInfo