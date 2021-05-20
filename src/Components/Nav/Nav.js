import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'
    const Nav=()=>{
        return(<div className={classes.NavBar}>
    <NavLink className={classes.item } activeClassName={classes.activebutton} to='/profile'>Profile</NavLink>  
    <NavLink className={classes.item} activeClassName={classes.activebutton} to='/dialogs'>Message</NavLink>  
    <NavLink className={classes.item} activeClassName={classes.activebutton} to='/news'>News</NavLink>
    <a className={classes.item}>Friends</a>    
</div>)
    }
    export default Nav  