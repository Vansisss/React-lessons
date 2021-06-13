import { getlogged } from "../api/api"

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
  
   }  
     return state
}
export default LoginReduser


export let loginThunk=()=>async(dispatch)=>{
  
  let logdata1=await getlogged()
  if(logdata1.resultCode===0){
    let logdata=logdata1.data
  dispatch({type:'setLoginData', logdata})
  }
}