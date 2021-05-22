import React from 'react'
import classes from'./DialogMess.module.css'


const Message=(props)=>{
   if(props.author==='Ya'){ return(<div className={classes.mymess}>{props.author }:{props.message}</div>)}
    else{ return <div className={classes.notmymess}>{props.author }:{props.message} </div> }
    }
    export default Message