import React from 'react';
import { NavLink } from 'react-router-dom';
import User from '../Dialogs/UsersDial/User';
import classes from './Nav.module.css'
    const Nav=(props)=>{
       
        let UserNav=props.friends.map(friend=> <User name={friend.name}/>)
        return(<div className={classes.NavBar}>
    <NavLink className={classes.item } activeClassName={classes.activebutton} to='/profile'>Profile</NavLink>  
    <NavLink className={classes.item} activeClassName={classes.activebutton} to='/dialogs'>Message</NavLink>  
    <NavLink className={classes.item} activeClassName={classes.activebutton} to='/news'>News</NavLink>
    <NavLink className={classes.item} activeClassName={classes.activebutton} to='/users'>Users</NavLink>
            <div className={classes.friends}>Friends
           {UserNav}    
        </div></div>)
    }
    export default Nav  