import React from 'react'
import classes from'./DialogMess.module.css'
import Message from './Message'



const DialogMess=(props)=>{


 let MessArrayMapped = props.hren.map(mess=> <Message message={mess.message} author={mess.author}/> )
 
   return(
      <div className='DialogMess'>
         Messages
       {MessArrayMapped}
         </div>
    )
    }
    export default DialogMess