import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import {addChanges, addPosts} from './../redux/state'

export let renderEntireTree=(state)=>{
ReactDOM.render(
  <React.StrictMode>
    
    <App addChanges={addChanges} addPosts={addPosts} posts={state.ProfileState.posts} newPost={state.ProfileState.newPost} users={state.DialogState.Users} mesages={state.DialogState.Messages} />
  
   
  </React.StrictMode>,
  document.getElementById('root')
);}

