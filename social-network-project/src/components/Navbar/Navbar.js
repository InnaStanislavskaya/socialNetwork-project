import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar () {
    return (
        <nav className={classes.navbar}>
            <div className={classes.menu}>
            <div className={classes.item}><NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Dialogs</NavLink></div>
            </div>
        </nav>
    )
}

export default Navbar