import React from 'react';


 

const User =(props)=> {
  let follow=""
  if(props.follow)follow='follow'
  if(!props.follow)follow="unfollow"
  let followFun=()=>{props.followf()}
  
   return(
      <div className='User'>
        <img src='https://i.ytimg.com/vi/_b2n9WAv7wY/maxresdefault.jpg'></img>
      <li>{props.name}</li>
      <li>{props.location.cityName}</li>
      <li>{props.location.countryName}</li>
      <li><button onClick={followFun}>{follow}</button></li>
      
      </div>
    )
    }
    export default User;