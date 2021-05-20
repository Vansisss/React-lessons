import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';



const App=()=> {
  return ( 
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Nav/>
     <div className='Content'>
     <Route path ='/profile' component ={Profile}/>
     <Route path ='/dialogs' component ={Dialogs}/>
     <Route path ='/news' component ={News}/>
     </div>
    </div>
     
    </BrowserRouter>
  )
}




export default App;
