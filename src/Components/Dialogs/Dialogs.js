import React from 'react'
import { withLogRedirect } from '../../hoc/withLogRedirectComponent'
import DialogMess from './DialogMess/DialogMess'
import DialogMessContainer from './DialogMess/DialogMessContainer'
import classes from'./Dialogs.module.css'
import UsersD from './UsersDial/UsersD'

const Dialogs=(props)=>{
  
   return(
      <div className={classes.DialogsMain}>
     
         <UsersD users={props.users}/>
         <DialogMessContainer messageTxT={props.messageTxT} dispatch={props.dispatch} hren={props.messages}  />
         </div>
    )
    }
    let withLogDialogs=withLogRedirect(Dialogs)
    export default withLogDialogs