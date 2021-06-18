import React from 'react'
import classes from'./DialogMess.module.css'
import Message from './Message'


let MesRef=React.createRef()


const DialogMess=(props)=>{

let addMess=()=>{

  props.addNewMess(MesRef.current.value)
  MesRef.current.value=''
 }
 let addChange=()=>{
  
   return props.addNewChange(MesRef.current.value)
 }
 let MessArrayMapped = props.hren.map(mess=> <Message message={mess.message} author={mess.author}/> )
 
   return(
      <div className='DialogMess'>
         Messages
       {MessArrayMapped}
       <textarea onChange={addChange} ref={MesRef} ></textarea>
       <button onClick={addMess}>Add</button>
         </div>
    )
    }
    export default DialogMess