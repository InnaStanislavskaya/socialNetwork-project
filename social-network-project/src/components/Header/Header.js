import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
// import logo from './images/logo.png'

function Header () {
    return (
        <div className={classes.header}> 
            <div className={classes.logo}>
                <div>LOGO</div>
            </div>
            <div className={classes.login}>
                <NavLink to={'/login'}>LOGIN</NavLink>
            </div>
        </div>
    )
}

export default Header