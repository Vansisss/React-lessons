import { getUserProfile } from "../api/api"

let initialState = {
    newPost:"It samur",
      posts : [
              {id:1,post:"aaaaaaaaaaaaaa"},
              {id:2,post:"sbbbbbbbbbbbbbbbbb"},
              {id:3,post:"ccccccccccccccc"},
              {id:4,post:"ddddddddddddddddd"}
            ],
      profile:{ photos:{large:'',small:""}}
}

let ProfileReduser=(state=initialState,action)=>{
   let CopyState={...state}  
   switch(action.type){
     case "addPosts":
      let newpost ={
        id:5,
        post:CopyState.newPost
             }
             CopyState.posts=[...state.posts]
             CopyState.posts.push(newpost)
            CopyState.newPost=''
            return CopyState
        case "addChanges": 
       CopyState.newPost=action.postText
       return CopyState
    
      case "SetProfile":
        
          CopyState.profile=action.profile
         
        return CopyState
      }
      return state
}
export default ProfileReduser

export const getUserProfileThunk=(id)=>async(dispatch)=>{
  debugger
let profile =await getUserProfile(id)
  dispatch({type:'SetProfile',profile})
}