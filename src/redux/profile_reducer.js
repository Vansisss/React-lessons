let ProfileReduser=(state,action)=>{
    if(action.type==='addPosts'){
        let newpost ={
          id:5,
          post:state.newPost
               }
               state.posts.push(newpost)
              state.newPost=''
      }
      else if(action.type==='addChanges'){
       state.newPost=action.postText
      } 
      return state
}
export default ProfileReduser