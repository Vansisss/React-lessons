import React from 'react'
import DialogMess from './DialogMess/DialogMess'
import classes from'./Dialogs.module.css'
import UsersD from './UsersDial/UsersD'
const Dialogs=(props)=>{
  console.log(props.messageTxT)
   return(
      <div className={classes.DialogsMain}>
     
         <UsersD users={props.users}/>
         <DialogMess messageTxT={props.messageTxT} dispatch={props.dispatch} hren={props.messages}  />
         </div>
    )
    }
    export default Dialogs