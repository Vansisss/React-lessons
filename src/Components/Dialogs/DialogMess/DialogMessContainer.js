import React from 'react'
import DialogMess from './DialogMess'




const DialogMessContainer=(props)=>{

let addNewMess=(text)=>{

  return props.dispatch({type:'addMessage',MessageTxT: text})
 }
 let addNewChange=(text)=>{
 
   return props.dispatch({type:'addChange',text:(text)})
 }
 
 
   return(
          <DialogMess  hren={props.hren} addNewMess={addNewMess} addNewChange={addNewChange}/>
    )
    }
    export default DialogMessContainer