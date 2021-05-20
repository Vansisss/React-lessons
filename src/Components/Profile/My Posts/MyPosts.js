import React from 'react';
import classes from'./MyPosts.module.css'
import Post from './Post/Post';
const MyPosts =()=> {
   return(
      <div className='stage'>
        <textarea></textarea>
        <button>Add</button>
      <Post mess='OLOLO' likesCounter='10'/>
      <Post mess='hello world' likesCounter='16'/>
      <Post mess='Hi i am SOSLO' likesCounter='12'/>
      <Post mess='txtasdasdasdasdasdas'likesCounter=' 20'/>
      </div>
    )
    }
    export default MyPosts;