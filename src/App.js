import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';
import Users from './Components/Users/Users'
import ProfileContainer from './Components/Profile/ProfileContainer';
import {SuperPuperLoginContainer} from './Components/Header/HeaderContainer'


const App=(props)=> {
  
  let getProps = props
  console.log(getProps)

  return ( 
   
    <BrowserRouter>
    <div className="App">
     <HeaderContainer/>
     <Nav friends={getProps.users}/>
     <div className='Content'>
     <Route path ='/login' render ={()=><SuperPuperLoginContainer />}/>
     <Route path ='/profile/:userId'  render ={()=><ProfileContainer dispatch={getProps.dispatch} newPost={getProps.newPost} posts={getProps.posts} />}/>
     <Route path ='/dialogs' render ={()=><Dialogs messageTxT={getProps.messageTxT} dispatch={getProps.dispatch} messages={getProps.mesages} users={getProps.users}/>}/>
     <Route path ='/users' render ={()=><Users />}/>
     <Route path ='/news' component ={News}/>
     </div>
    </div>
     
    </BrowserRouter>
  )
}




export default App;
