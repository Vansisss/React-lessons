import React from 'react'
import classes from'./DialogMess.module.css'
const Message=(props)=>{
   return(
      <div className={classes.Message}>

         {props.author}:
         {props.message}
         
         
         </div>
    )
    }
    export default Message