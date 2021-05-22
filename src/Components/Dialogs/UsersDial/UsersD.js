import React from 'react'
import { NavLink } from 'react-router-dom'
import User from './User'
import './UsersD.css'


const UsersD=(props)=>{
   console.log(props)
   
let UserArrayMapped=props.users.map(dialog=> <User id={dialog.id} name={dialog.name}/>)
   return(
      <div className='UsersD'>
         Chats

        {UserArrayMapped
         }
         </div>
    )
    }
    export default UsersD