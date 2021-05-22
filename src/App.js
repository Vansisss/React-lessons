import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';



const App=(props)=> {
  
  let getProps = props
  

  return ( 
   
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Nav friends={getProps.users}/>
     <div className='Content'>
     <Route path ='/profile'  render ={()=><Profile posts={getProps.posts}/>}/>
     <Route path ='/dialogs' render ={()=><Dialogs messages={getProps.mesages} users={getProps.users}/>}/>
     <Route path ='/news' component ={News}/>
     </div>
    </div>
     
    </BrowserRouter>
  )
}




export default App;
