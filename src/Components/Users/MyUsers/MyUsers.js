import React from 'react';
import User from '../User';
import classes from'./MyUsers.module.css'
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { deleteFollow, postFollow } from '../../../api/api';




 const MyUsers =(props)=> {
    let setPage=(a)=>{
      props.setPages(a)
      console.log(props,a)
      props.getUsersThunk(a) 
    }
    
  let UsersArray = props.users.map(u=><div >
    <NavLink to={"/profile/"+u.id}>
     <img src='https://i.ytimg.com/vi/_b2n9WAv7wY/maxresdefault.jpg'></img>
     </NavLink>
      <li>{u.name}</li>
      
      {u.followed
        ?<button onClick={()=>{
         props.deleteFollowThunk(u.id)
        }}>Unfollow</button>
        :<button onClick={()=>{
          props.postFollowThunk(u.id)
          }}>Follow</button>}
        
        
  </div>)
    
  return(

      <div className='MyUsers'>
         {props.isFatchings ?<Preloader/>:""}
       <button onClick={()=>{setPage(1)}}>1</button>
       <button onClick={()=>{setPage(2)}}>2</button>
       <button onClick={()=>{setPage(3)}}>3</button>
       <button onClick={()=>{setPage(4)}}>4</button>

      
        {UsersArray}
      
      </div>
    )
    }
    
    export default MyUsers;