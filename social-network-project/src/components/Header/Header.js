import React from 'react';
import classes from './Header.module.css';

function Header () {
    return (
        <div className={classes.header}> 
            <div className={classes.logo}> Header </div>
        </div>
    )
}

export default Header