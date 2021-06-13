import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
let mapStateToPropsForRedirect=(state)=>({
    Log:state.LoginState.logged
})

export const withLogRedirect = (Component)=>{
    const RedirectComponent =(props)=>{
    
        if(props.Log===false) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
        const ConnectedWithLogRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)
    
    return ConnectedWithLogRedirect
}