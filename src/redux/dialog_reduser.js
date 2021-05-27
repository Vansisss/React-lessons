let initialState={
    MessageTxT:"Zdarova Otec",
  
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
      ]
}

let DialogReduser =(state=initialState,action)=>{
if(action.type==='addMessage'){
    let newMessage={
      id:6,author:'Ya',message : state.MessageTxT
  
    }
    state.Messages.push(newMessage)
    state.MessageTxT=''
    
  }
  else if(action.type==='addChange'){
    state.MessageTxT=action.text
   
  }
  return state
}
export default DialogReduser