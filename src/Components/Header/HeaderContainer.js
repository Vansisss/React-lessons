import React, { useEffect } from 'react';
import Header from './Header';
import {connect} from 'react-redux'
import{loginThunk,logOut,changelog,postloginThunk} from '../../redux/login_reducer';
import Login from '../Login/Login';




let mapStateToProps =(state)=>{
  return{
    LoginData:state.LoginState.statedata,
    Log:state.LoginState.logged
  }
}



const SuperLoginContainer = connect(mapStateToProps,{loginThunk,logOut,changelog,postloginThunk})(Header)

export const SuperPuperLoginContainer = connect(mapStateToProps,{loginThunk,logOut,changelog,postloginThunk})(Login)
  
  export default SuperLoginContainer;
