import React from 'react';
import MyPosts from './My Posts/MyPosts';
import MyPostsContainer from './My Posts/MyPostsContainer';
import classes from'./Profile.module.css'


const Profile=(props)=>{

   return(
    
    <div className={classes.SelfInfo}>
      <div className={classes.Ava}><img src="https://yt3.ggpht.com/a/AATXAJz7AW_0ITyihqBit8OESKkD9vVNXbyjGnbThHnU=s900-c-k-c0xffffffff-no-rj-mo"></img></div>
      <div className={classes.inform}><ul> 
                            <li>Name: Andron Kabachkov</li>
                            <li>Age:  30</li>
                            <li>  City: Chern</li>
                            <li>Interests: Cinema</li>
                            
                            </ul>
                            </div>
                           
      
     <MyPostsContainer dispatch={props.dispatch} newPost={props.newPost} posts={props.posts} />
    </div>)
    }
    export default Profile;