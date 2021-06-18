import React from 'react'
import classes from'./DialogMess.module.css'
import Message from './Message'
import { Form, Field } from 'react-final-form'

let MesRef=React.createRef()
const onSubmit =  values => {

  window.alert((0,0,values))
}

const DialogMess=(props)=>{

let addMess=(value)=>{
  debugger
  props.addNewMess(value.message)
  
 }

 let MessArrayMapped = props.hren.map(mess=> <Message message={mess.message} author={mess.author}/> )
 
   return(
      <div className='DialogMess'>
         Messages
       {MessArrayMapped}
       <Form
      onSubmit={addMess}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>    
            <Field name="message" component="input" type="text" placeholder="Your message" />
          </div>
          <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            </form>)}/>
         </div>
    )
    }
    export default DialogMess