import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';



const App=()=> {
  return ( 
    <div className="App">
     <Header/>
     <Nav/>
     <Profile/>
     
     
    </div>
  )
}




export default App;
