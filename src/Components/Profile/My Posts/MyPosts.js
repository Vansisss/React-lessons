import React from 'react';
import classes from'./MyPosts.module.css'
import Post from './Post/Post';
const MyPosts =()=> {
   return(
      <div className='stage'>
        <textarea></textarea>
        <button>Add</button>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
    )
    }
    export default MyPosts;