import React from 'react';
import classes from './Navbar.module.css';

function Navbar () {
    return (
        <div className={classes.navbar}>
            <div className={classes.menu}>
            <div><a href="/profile">Profile</a></div>
            <div><a href="/dialogs">Dialogs</a></div>
            </div>
        </div>
    )
}

export default Navbar