
let initialState = {
      users : [
              
             
            ]
}


let UsersReduser=(state=initialState,action)=>{
   let CopyState={...state}  
   switch(action.type){
     case "Follow":
        return{
          ...state,users: state.users.map(u=>{
            if(u.id===action.userID)
            {return{...u,follow:true}}
            return u
          })
        }
          
        case "Unfollow":
          return{
            ...state,users: state.users.map(u=>{
              if(u.id===action.userID)
              {return{...u,follow:false}}
              return u
            })
          }
        case "setUsers":
        
        return{
          users: [].concat(state.users,action.newUsers)
          }
   }  
     return state
}
export default UsersReduser