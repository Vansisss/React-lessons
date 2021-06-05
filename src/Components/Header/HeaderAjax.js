import React, { useEffect } from 'react';
import classes from'./Header.module.css'
import * as axios from 'axios'
import Header from './Header';
import {connect} from 'react-redux'
class HeaderAjax extends React.Component{

componentDidMount(){
    
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then((resp) => {
    
    this.props.SetLoginData(resp.data.data)
    })}


 
 

render() { return (
     <Header {...this.props}/>)
}}
const mapStataToProps =(state)=>({})
export default connect(mapStataToProps,{})(HeaderAjax);