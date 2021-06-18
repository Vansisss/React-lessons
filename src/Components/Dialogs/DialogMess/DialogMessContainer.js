import React from 'react'
import { connect } from 'react-redux'
import DialogMess from './DialogMess'


const mapStateToProps=(state)=>{return {
  hren:state.DialogState.Messages
}}
const mapStateToDispatch=(dispatch)=>{
  return{
   addNewMess:(message)=>{dispatch({type:'addMessage',message})},
    addNewChange:(text)=>dispatch({type:'addChange',text:(text)})
  }
}

    const SuperDialogMessContainer = connect(mapStateToProps,mapStateToDispatch)(DialogMess)

    export default SuperDialogMessContainer