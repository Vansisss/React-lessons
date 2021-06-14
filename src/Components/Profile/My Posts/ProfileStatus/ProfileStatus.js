import React from "react"
let newRef = React.createRef();

const ProfileStatus=(props)=>{
    let addChange=()=>{
  
        return props.statusChange(newRef.current.value)
      }

    if(props.inEdit===false) return  <span onDoubleClick={()=>{props.statusInEdit()}}>{props.status}</span>
    else  return <input onClick={()=>{props.statusInEdit()}} ref={newRef} value={props.status} onChange={addChange}></input>



    
}

export default ProfileStatus