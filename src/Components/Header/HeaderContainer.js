import React, { useEffect } from 'react';
import HeaderAjax from './HeaderAjax';
import {connect} from 'react-redux'




let mapStateToProps =(state)=>{
  return{
    LoginData:state.LoginState.statedata
  }
}
let mapStateToDispatch=(dispatch)=>{
  return{
   
    SetLoginData:(logdata)=>{dispatch({type:"setLoginData",logdata})}
  }
}


const SuperLoginContainer = connect(mapStateToProps,mapStateToDispatch)(HeaderAjax)

  
  export default SuperLoginContainer;
