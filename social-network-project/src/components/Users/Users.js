import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../../src/assets/images/User.svg.png';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        if(pages.length < 7){
            pages.push(i)
        }
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : null} 
                    onClick = {(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    {
        props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto} alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    { user.followed 
                    ? <button onClick={() => {

                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "0b242c6f-e752-4033-87fc-0150099d8044"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                }
                            });
                    }}>Unfollow</button> 
                    : <button onClick={() => {
                        
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "0b242c6f-e752-4033-87fc-0150099d8044"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(user.id);
                                }
                            });
                    }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>)
    }
    </div>
}

export default Users