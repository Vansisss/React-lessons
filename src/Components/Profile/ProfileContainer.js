import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './Profile'
import {getUserProfileThunk,statusInEdit,statusChange} from '../../redux/profile_reducer'
import { withLogRedirect } from '../../hoc/withLogRedirectComponent';
import { compose } from 'redux';


  let mapStateToProps =(state)=>{
    
    return{
      profile:state.ProfileState.profile,
      status:state.ProfileState.status,
      inEdit:state.ProfileState.statusOnEdit

    }
  }
  /*let mapStateToDispatch=(dispatch)=>{
    return{
      SetProfile:(profile)=>{dispatch({type:"SetProfile",profile})}
   
    }
  }*/
    export default compose(connect(mapStateToProps,{getUserProfileThunk,statusInEdit,statusChange}),
    withLogRedirect,
    withRouter
  )(Profile)