
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