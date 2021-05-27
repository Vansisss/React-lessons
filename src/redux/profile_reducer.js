
let initialState = {
    newPost:"It samur",
      posts : [
              {id:1,post:"aaaaaaaaaaaaaa"},
              {id:2,post:"sbbbbbbbbbbbbbbbbb"},
              {id:3,post:"ccccccccccccccc"},
              {id:4,post:"ddddddddddddddddd"}
            ]
}

let ProfileReduser=(state=initialState,action)=>{
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