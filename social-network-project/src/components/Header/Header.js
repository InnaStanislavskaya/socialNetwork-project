import React from 'react';
import classes from './Header.module.css';
// import logo from './images/logo.png'

function Header () {
    return (
        <div className={classes.header}> 
            <div className={classes.logo}>
                <div>LOGO</div>
            </div>
        </div>
    )
}

export default Header