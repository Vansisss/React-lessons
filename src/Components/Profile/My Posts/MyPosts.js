import React from 'react';
import classes from'./MyPosts.module.css'
import Post from './Post/Post';


const MyPosts =(props)=> {
  let newRef = React.createRef();

let addPost=()=>{
  
  let text=newRef.current.value
   props.addNewPost() 
   newRef.current.value=''
}
  let postsArray = props.posts.map(mess=> <Post post={mess.post} /> )
  let onpostChange =()=>{

    props.onpostNewChange(newRef.current.value)
   

  }
   return(

      <div className='stage'>
        <textarea onChange={onpostChange} ref={newRef} ></textarea>
        <button onClick={addPost}>Add</button>
      {postsArray}
      </div>
    )
    }
    export default MyPosts;