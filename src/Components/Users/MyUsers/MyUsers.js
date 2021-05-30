import React from 'react';
import User from '../User';
import classes from'./MyUsers.module.css'

let usersState={
  newusers: [
    {id:1,follow:true,name:"Ololosha",location:{cityName:'Moscow',countryName:"Russia"}},
    {id:2,follow:false,name:"Leha",location:{cityName:'Kiev',countryName:"Ukraine"}},
   {id:3,follow:true,name:"Nadya",location:{cityName:'Minsk',countryName:"BelaRussia"}},
   {id:4,follow:false,name:"Renat",location:{cityName:'Ottava',countryName:"Canada"}},]
  
 }

const MyUsers =(props)=> {
  let setUsers=()=>{props.setUsers(usersState.newusers)}




let fun=(userID)=>{
   props.unfollow(userID)
}
  let UsersArray = props.users.map(u=><div key={u.id}>
     <img src='https://i.ytimg.com/vi/_b2n9WAv7wY/maxresdefault.jpg'></img>
      <li>{u.name}</li>
      <li>{u.location.cityName}</li>
      <li>{u.location.countryName}</li>
      {u.follow
        ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
        :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
        
        
  </div>)
  return(

      <div className='MyUsers'>
        {UsersArray}
        <button onClick={setUsers}>Set Users</button>
      </div>
    )
    }
    
    export default MyUsers;