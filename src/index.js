import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store'
import { Provider } from 'react-redux';




  
    ReactDOM.render(
      <React.StrictMode>
       <Provider store={store}>
        <App LogState={store.getState().LoginState} messageTxT={store.getState().DialogState.MessageTxT} dispatch={store.dispatch} posts={store.getState().ProfileState.posts} newPost={store.getState().ProfileState.newPost} users={store.getState().DialogState.Users} mesages={store.getState().DialogState.Messages} />
       
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
