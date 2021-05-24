import { renderEntireTree } from "../render/render";

const state ={
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

 
    }
    export let addPosts = ()=>{
        let newpost ={
            id:5,
            post:state.ProfileState.newPost
                 }
                 state.ProfileState.posts.push(newpost);
                 state.ProfileState.newPost=''
                renderEntireTree(state)
            }
    export let addChanges = (postText)=>{
       
                 state.ProfileState.newPost=postText
                 
                renderEntireTree(state)
            }


export default state