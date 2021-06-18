import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import MyPostsContainer from './My Posts/MyPostsContainer';
import classes from'./Profile.module.css'
import ProfileStatus from './My Posts/ProfileStatus/ProfileStatus';




const Profile=(props)=>{
console.log(props)
let userID =props.match.params.userId
  useEffect(()=>{
    props.getUserProfileThunk(userID)
  },[])
  
  
  return(
    <div  className={classes.SelfInfo}>
      <ProfileStatus putUsrerProfileStatusThunk ={props.putUsrerProfileStatusThunk} 
              id={props.profile.userId}
              getUserProfileStatusThunk={props.getUserProfileStatusThunk}
                status={props.status} 
                inEdit={props.inEdit} 
                statusInEdit={props.statusInEdit}
                statusChange={props.statusChange} />


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