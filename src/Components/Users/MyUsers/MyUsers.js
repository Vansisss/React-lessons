import React from 'react';
import User from '../User';
import classes from'./MyUsers.module.css'
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const MyUsers =(props)=> {


  let setUsers=(page)=>{ 
  
    props.isFatching(true)
   
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`).then(res => {
                 
    props.setUsers(res.data.items)
               
               props.isFatching(false)
      })
      .catch((er)=>{console.error(er)})
    };
    let setPage=(a)=>{
      props.setPages(a)
   
      console.log(props,a)
      setUsers(a)
    }
    
  let UsersArray = props.users.map(u=><div key={u.id}>
    <NavLink to={"/profile/"+u.id}>
     <img src='https://i.ytimg.com/vi/_b2n9WAv7wY/maxresdefault.jpg'></img>
     </NavLink>
      <li>{u.name}</li>
      
      {u.followed
        ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
        :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
        
        
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