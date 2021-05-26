import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import {addPosts,addChanges} from './redux/state'



let renderEntireTree=()=>{
    ReactDOM.render(
      <React.StrictMode>
        
        <App  messageTxT={store._state.DialogState.MessageTxT} dispatch={store.dispatch} posts={store._state.ProfileState.posts} newPost={store._state.ProfileState.newPost} users={store._state.DialogState.Users} mesages={store._state.DialogState.Messages} />
      
       
      </React.StrictMode>,
      document.getElementById('root')
    );}
    renderEntireTree()
store.subscribe(renderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
