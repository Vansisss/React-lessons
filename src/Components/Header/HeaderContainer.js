import React, { useEffect } from 'react';
import Header from './Header';
import {connect} from 'react-redux'
import{loginThunk} from '../../redux/login_reducer';




let mapStateToProps =(state)=>{
  return{
    LoginData:state.LoginState.statedata,
    Log:state.LoginState.logged
  }
}



const SuperLoginContainer = connect(mapStateToProps,{loginThunk})(Header)

  
  export default SuperLoginContainer;
