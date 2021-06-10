import React from 'react';
import User from '../User';
import classes from'./MyUsers.module.css'
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const MyUsers =(props)=> {


  let setUsers=(page)=>{ 
  
    props.isFatching(true)
   
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`,{withCredentials:true}).then(res => {
                 
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
    
  let UsersArray = props.users.map(u=><div >
    <NavLink to={"/profile/"+u.id}>
     <img src='https://i.ytimg.com/vi/_b2n9WAv7wY/maxresdefault.jpg'></img>
     </NavLink>
      <li>{u.name}</li>
      
      {u.followed
        ?<button onClick={()=>{
          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
          {withCredentials:true,
          headers:{
            "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
          }}).then(res => {
                 
            if(res.data.resultCode==0){
              props.unfollow(u.id)
            }
               
      })
      .catch((er)=>{console.error(er)})
        }}>Unfollow</button>
        :<button onClick={()=>{
          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
          {withCredentials:true,
          headers:{
            "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
          }}).then(res => {
                 
            if(res.data.resultCode==0){
              props.follow(u.id)
            }
               
      })
      .catch((er)=>{console.error(er)})
          
          
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