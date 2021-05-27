import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store'
import {addPosts,addChanges} from './redux/state'



let renderEntireTree=()=>{
  console.log(store.getState())
    ReactDOM.render(
      <React.StrictMode>
        
        <App  messageTxT={store.getState().DialogState.MessageTxT} dispatch={store.dispatch} posts={store.getState().ProfileState.posts} newPost={store.getState().ProfileState.newPost} users={store.getState().DialogState.Users} mesages={store.getState().DialogState.Messages} />
      
       
      </React.StrictMode>,
      document.getElementById('root')
    );}
    renderEntireTree()
store.subscribe(renderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
