import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './Profile'
import {getUserProfileThunk} from '../../redux/profile_reducer'
import { withLogRedirect } from '../../hoc/withLogRedirectComponent';


  let mapStateToProps =(state)=>{
    
    return{
      profile:state.ProfileState.profile,
    
      

    }
  }
  /*let mapStateToDispatch=(dispatch)=>{
    return{
      SetProfile:(profile)=>{dispatch({type:"SetProfile",profile})}
   
    }
  }*/


  let ProfileCont=withRouter(Profile)
  let withLogProfileCont=withLogRedirect(ProfileCont)
  const SuperProfileContainer = connect(mapStateToProps,{getUserProfileThunk})(withLogProfileCont)
  
    
    export default SuperProfileContainer;