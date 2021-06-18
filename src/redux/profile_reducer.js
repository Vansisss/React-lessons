import { getUserProfile,getProfileStatus,putProfileStatus } from "../api/api"

let initialState = {
  status:'My Status',
  statusOnEdit:false,
    newPost:"It",
      posts : [
              {id:1,post:"aaaaaaaaaaaaaa"},
              {id:2,post:"sbbbbbbbbbbbbbbbbb"},
              {id:3,post:"ccccccccccccccc"},
              {id:4,post:"ddddddddddddddddd"}
            ],
      profile:{ photos:{large:'',small:""},

      
    
    }
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
        case "SetProfileStatus":
        
          CopyState.status=action.status
         
        return CopyState
        case "statusInEditChange":
          if(CopyState.statusOnEdit===false) {
            CopyState.statusOnEdit=true
          }
          else  CopyState.statusOnEdit=false
          return CopyState
        case "statusChange":
          CopyState.status=action.changes
          return CopyState
      }
      return state
}
export default ProfileReduser

export const getUserProfileThunk=(id)=>async(dispatch)=>{

let profile =await getUserProfile(id)
  dispatch({type:'SetProfile',profile})
}
export const getUserProfileStatusThunk=(id)=>async(dispatch)=>{

let status =await getProfileStatus(id)
  dispatch({type:'SetProfileStatus',status})
}
export const putUsrerProfileStatusThunk=(status)=>(dispatch)=>{
debugger
  putProfileStatus(status)
  dispatch({type:'SetProfileStatus',status})
}
export const statusInEdit=(newPage)=>({type:'statusInEditChange',newPage})
export const statusChange=(changes)=>({type:'statusChange',changes})
