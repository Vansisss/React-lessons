import React, { useEffect } from 'react';
import MyPostsContainer from './My Posts/MyPostsContainer';
import classes from'./Profile.module.css'
import * as axios from 'axios'




const Profile=(props)=>{

  useEffect(()=>{
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((resp) => {
        props.SetProfile(resp.data)
    });
  },[])

  return(
    
    
    <div  className={classes.SelfInfo}>
    <div className={classes.Ava}><img src={props.profile.photos.large}></img></div>
    <div className={classes.inform}><ul> 
                          <li>Name: {props.profile.fullName}</li>
                          <li>About me:{props.profile.aboutMe} </li>
                          
                          </ul>
                          </div>
                         
    
   <MyPostsContainer dispatch={props.dispatch} newPost={props.newPost} posts={props.posts} />
  </div>)

  
 
  
   }
   
    
    export default Profile;