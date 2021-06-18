import { deleteAuth, getlogged, postLogin } from "../api/api"
import { Redirect } from 'react-router';
let initialState = {
  
    statedata:{id:"",
            login:"",
            email:""
          },
          messages:[],
          fieldsErrors:[],
          
          resultCode:"",
    logged:false
}


let LoginReduser=(state=initialState,action)=>{
  
   switch(action.type){
     case "setLoginData":
      state.logged=true
       
        return{
          ...state,statedata:action.logdata    
          
        }
    case "changelog":
      if(state.logged===true){state.logged=false}
      else state.logged=true

   }  
     return state
}
export default LoginReduser

export const changelog=(log)=>({type:'changelog',log})


export let loginThunk=()=>async(dispatch)=>{
  
  let logdata1=await getlogged()
  if(logdata1.resultCode===0){
    let logdata=logdata1.data
  dispatch({type:'setLoginData', logdata})
  }
}
export let postloginThunk=(value)=>async(dispatch)=>{
  
  let result=await postLogin(value)
  
  if(result===1){return result}
 
}

export let logOut=()=>async(dispatch)=>{
  
  let logdata1=await deleteAuth()

}