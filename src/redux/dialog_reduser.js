let DialogReduser =(state,action)=>{
if(action.type==='addMessage'){
    let newMessage={
      id:6,author:'Ya',message : state.MessageTxT
  
    }
    state.Messages.push(newMessage)
    
  }
  else if(action.type==='addChange'){
    state.MessageTxT=action.text
   
  }
  return state
}
export default DialogReduser