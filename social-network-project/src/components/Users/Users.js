import React from 'react';
import classes from './Users.module.css';

function Users(props) {

    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://i.pinimg.com/474x/86/df/9f/86df9f89ea6fb42b4655036db001f717.jpg',
                followed: false, fullName: 'Inna', status: 'I am a girl', location: {city: 'Kharkiv', country: 'Ukrain'}},
            {id: 2, photoUrl: 'https://i.pinimg.com/474x/86/df/9f/86df9f89ea6fb42b4655036db001f717.jpg',
                followed: true, fullName: 'Daniel', status: 'I am a boy', location: {city: 'Kharkiv', country: 'Ukrain'}},
            {id: 3, photoUrl: 'https://i.pinimg.com/474x/86/df/9f/86df9f89ea6fb42b4655036db001f717.jpg',
                followed: false, fullName: 'Bonya', status: 'I am a cat', location: {city: 'Minsk', country: 'Belarus'}},
        ])
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={classes.userPhoto} alt="avatar"/>
                    </div>
                    <div>
                        { user.followed 
                        ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users