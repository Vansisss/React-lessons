import React from 'react';
import MyPosts from './MyPosts';



const MyPostsContainer =(props)=> {

let addNewPost=()=>{  
   props.dispatch({type:"addPosts"})
   
}
  let onpostNewChange =(text)=>{
    props.dispatch({type:'addChanges',postText:text})
    

  }
   return(
           <MyPosts addNewPost={addNewPost} onpostNewChange={onpostNewChange} posts={props.posts}/>
    )
    }
    export default MyPostsContainer;