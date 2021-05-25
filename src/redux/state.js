let store={
 subscriber(){console.log('aa')},

   _state :{
     getState(){
       return this._state
     },
      ProfileState :{
        newPost:"It samur",
      posts : [
              {id:1,post:"aaaaaaaaaaaaaa"},
              {id:2,post:"sbbbbbbbbbbbbbbbbb"},
              {id:3,post:"ccccccccccccccc"},
              {id:4,post:"ddddddddddddddddd"}
            ]
          
      },
     
      DialogState : {
     
  
      Messages : [
          {id:1,author:'Vasya',message:"aaaasdasfga"},
          {id:2,author:'Ya',message:"sdfbhdfnasdg"},
          {id:3,author:'Yasha',message:"aandfgndgnsdf"},
          {id:4,author:'Ya',message:"asdfhsdfgsdfg"}
        ],
        
      Users:[
          {id:1,name:'Vasya'},
          {id:2,name:'Petya'},
          {id:3,name:'Yasha'},
          {id:4,name:'Lava'}
        ] }
  
   
      },

  dispatch(action){
    if(action.type==='addPosts'){
      let newpost ={
        id:5,
        post:store._state.ProfileState.newPost
             }
             store._state.ProfileState.posts.push(newpost)
             store._state.ProfileState.newPost=''
            store.subscriber()
    }
    else if(action.type==='addChanges'){
      
      store._state.ProfileState.newPost=action.postText
                   
      store.subscriber()
    }
  },

subscribe(observer){ this.subscriber=observer}
  
}



export default store