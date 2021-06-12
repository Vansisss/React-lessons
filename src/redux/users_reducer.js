import { deleteFollow, getUsers, postFollow } from "../api/api"

let initialState = {
      users : [
                        
            ],
      CountofPages:10,
      page:1,
      isFatchings:false
}


let UsersReduser=(state=initialState,action)=>{
   let CopyState={...state}  
   switch(action.type){
     case "Follow":
        return{
          ...state,users: state.users.map(u=>{
            if(u.id===action.userID)
            {return{...u,followed:true}}
            return u
          })
        }
          
        case "Unfollow":
          return{
            ...state,users: state.users.map(u=>{
              if(u.id===action.userID)
              {return{...u,followed:false}}
              return u
            })
          }
        case "setUsers":
        
        return{
          ...state.users=[],
          ...state,users: [].concat(state.users,action.newUsers)
          }

          case "setPage":
            return{
                  
             ...state,page:action.newPage
              }
        case "isFatching":
        return {
          ...state,isFatchings:action.isFatch
        }
   }  
     return state
}
export default UsersReduser
export const isFatching=(isFatch)=>({type:'isFatching',isFatch})
export const setUsers=(newUsers)=>({type:'setUsers',newUsers})
export const follow=(userID)=>({type:"Follow",userID})
export const unfollow=(userID)=>({type:"Unfollow",userID})
export const setPages=(newPage)=>({type:'setPage',newPage})
  
    
export let getUsersThunk=(page)=>async(dispatch)=>{
  
 dispatch(isFatching(true))
  let result = await getUsers(page)

  dispatch(setUsers(result))
  dispatch(isFatching(false))
    } 
export let postFollowThunk=(id)=>(dispatch)=>{
  dispatch(isFatching(true))
  postFollow(id)
  dispatch(follow(id))
 dispatch(isFatching(false))
}
export let deleteFollowThunk=(id)=>(dispatch)=>{
  dispatch(isFatching(true))
 deleteFollow(id)
  dispatch(unfollow(id))
 dispatch(isFatching(false))
}