
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