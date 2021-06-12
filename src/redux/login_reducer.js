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
      
       
        return{
          ...state,statedata:action.logdata    
        }
  
   }  
     return state
}
export default LoginReduser


export let loginThunk=()=>async(dispatch)=>{
  debugger
  let logdata=await getlogged()
 
  dispatch({type:'setLoginData', logdata})

}