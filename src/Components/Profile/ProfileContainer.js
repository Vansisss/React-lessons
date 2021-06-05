import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './Profile'



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

  let ProfileCont=withRouter(Profile)
  const SuperProfileContainer = connect(mapStateToProps,mapStateToDispatch)(ProfileCont)
  
    
    export default SuperProfileContainer;