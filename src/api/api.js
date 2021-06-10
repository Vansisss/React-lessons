import * as axios from 'axios'
export const getUsers=(page=1)=>{
return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`,{withCredentials:true}).then(res => {
debugger
                
   
return res.data.items
               
              
      })
    }
export const postFollow=(id)=>{
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},
    {withCredentials:true,
    headers:{
      "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
    }}).then(res => {
           
      if(res.data.resultCode==0){
       return 1
      }
         
})
.catch((er)=>{console.error(er)})}

export const deleteFollow=(id)=>{

axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
{withCredentials:true,
headers:{
  "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
}}).then(res => {
       
  if(res.data.resultCode==0){
    return 1
  }
     
})
.catch((er)=>{console.error(er)})}