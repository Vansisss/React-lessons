import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import * as axios from 'axios'


  let mapStateToProps =(state)=>{
    return{
      profile:state.ProfileState.profile
     
    }
  }
  let mapStateToDispatch=(dispatch)=>{
    return{
      SetProfile:(profile)=>{dispatch({type:"SetProfile",profile})}
   
    }
  }
  const SuperProfileContainer = connect(mapStateToProps,mapStateToDispatch)(Profile)
  
    
    export default SuperProfileContainer;