import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
// import logo from './images/logo.png'

function Header (props) {
    return (
        <div className={classes.header}> 
            <div className={classes.logo}>
                <div>STAN_Network</div>
                <div className={classes.login}>
                    { props.isAuth ? 
                    <div> {props.login} - <button onClick = {props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink> }
                </div>
            </div>
        </div>
    )
}

export default Header