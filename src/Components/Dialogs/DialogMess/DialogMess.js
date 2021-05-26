import React from 'react'
import classes from'./DialogMess.module.css'
import Message from './Message'


let MesRef=React.createRef()


const DialogMess=(props)=>{
console.log(props)
let addMess=()=>{
console.log(props.dispatch.MessageTxT)
  return props.dispatch({type:'addMessage',MessageTxT: MesRef.current.value})
 }
 let addChange=()=>{
  console.log(props)
   return props.dispatch({type:'addChange',text:(MesRef.current.value)})
 }
 let MessArrayMapped = props.hren.map(mess=> <Message message={mess.message} author={mess.author}/> )
 
   return(
      <div className='DialogMess'>
         Messages
       {MessArrayMapped}
       <textarea onChange={addChange} ref={MesRef} value={props.messageTxT} ></textarea>
       <button onClick={addMess}>Add</button>
         </div>
    )
    }
    export default DialogMess