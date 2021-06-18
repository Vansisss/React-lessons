import React from "react"
let newRef = React.createRef();

const ProfileStatus=(props)=>{
    props.getUserProfileStatusThunk(props.id)
    let addChange=()=>{
  
        return props.statusChange(newRef.current.value)
      }
      
     
        
    if(props.inEdit===false) return  <span onDoubleClick={()=>{props.statusInEdit()}}>{props.status}</span>
    else  return <input onDoubleClick={()=>{ props.putUsrerProfileStatusThunk(newRef.current.value)
        props.statusInEdit()}} ref={newRef}  onChange={addChange}></input>



    
}

export default ProfileStatus