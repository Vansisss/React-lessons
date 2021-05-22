import React from 'react'
import './UsersD.css'
import { NavLink } from 'react-router-dom'
const User=(props)=>{
   return(
      <div className='User'>
         <img src='https://masyamba.ru/леопард-фото/85-леопард-фото-животного.jpg'></img>
          <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
         
        
         </div>
    )
    }
    export default User