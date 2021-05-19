import React from 'react';
import classes from './Nav.module.css'
    const Nav=()=>{
        return(<div className={classes.NavBar}>
    <div className={classes.item}>Profile</div>  
    <div className={classes.item}>Message</div>  
    <div className={classes.item}>News</div>
    <div>Friends</div>    
</div>)
    }
    export default Nav  