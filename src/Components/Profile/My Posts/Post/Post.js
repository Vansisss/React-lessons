import React from 'react';
import classes from'./Post.module.css'
const Post =(props)=> {
   return(
      <div className={classes.Post}>
        <img src='https://i.ytimg.com/vi/_b2n9WAv7wY/maxresdefault.jpg'></img>
      {props.post}
      <span></span>
      </div>
    )
    }
    export default Post;