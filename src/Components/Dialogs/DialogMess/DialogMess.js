import React from 'react'
import classes from'./DialogMess.module.css'
import Message from './Message'

let MesRef=React.createRef()
let addMess=()=>{
  alert(MesRef.current.value)
}

const DialogMess=(props)=>{


 let MessArrayMapped = props.hren.map(mess=> <Message message={mess.message} author={mess.author}/> )
 
   return(
      <div className='DialogMess'>
         Messages
       {MessArrayMapped}
       <textarea ref={MesRef}></textarea>
       <button onClick={addMess}>Add</button>
         </div>
    )
    }
    export default DialogMess