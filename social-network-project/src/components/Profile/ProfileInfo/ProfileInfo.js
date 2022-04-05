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
            <div className={classes.profile}>
                <div>
                    <div><b>fullName:</b> {props.profile.fullName}</div>
                    <div><b>aboutMe:</b> {props.profile.aboutMe}</div>
                    <div><b>facebook:</b> {props.profile.contacts.facebook}</div>
                    <div><b>github:</b> {props.profile.contacts.github}</div>
                    <div><b>instagram:</b> {props.profile.contacts.instagram}</div>
                </div>
                <div>
                    <img src={props.profile.photos.small} alt='avatar' className={classes.photo}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo