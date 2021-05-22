import React from 'react';
import classes from'./MyPosts.module.css'
import Post from './Post/Post';
const MyPosts =(props)=> {
  let postsArray = props.posts.map(mess=> <Post post={mess.post} /> )
   return(

      <div className='stage'>
        <textarea></textarea>
        <button>Add</button>
      {postsArray}
      </div>
    )
    }
    export default MyPosts;