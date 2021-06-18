import * as axios from 'axios'


export const getUsers=(page=1)=>{
return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`,{withCredentials:true}).then(res => {
                
   
return res.data.items
               
              
      })
    }
export const postFollow=(id)=>{
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},
    {withCredentials:true,
    headers:{
      "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
    }}).then(res => {
           debugger
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

export let getlogged=()=>{
 
return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then(res => {
 
  return res.data
  
  })
}
export let getUserProfile=(id)=>{
  
return axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+id).then((resp) => {
return resp.data
})}

export let getProfileStatus=(id)=>{
 
return axios.get('https://social-network.samuraijs.com/api/1.0/profile/status/'+id).then((resp) => {
return resp.data
})}

export const putProfileStatus=(status)=>{
  debugger
  axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`,{status},
  {withCredentials:true,
  headers:{
    "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
  }}).then(res => {
         
    if(res.data.resultCode==0){
     return 1
    }
       
})
.catch((er)=>{console.error(er)})}

export const deleteAuth=()=>{

  axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`,
  {withCredentials:true,
  headers:{
    "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"
  }}).then(res => {
         
    if(res.data.resultCode==0){
      return 1
    }
       
  })
  .catch((er)=>{console.error(er)})}

  export const postLogin=(value)=>{
   
   let email=value.email
   let password=value.password
  let rememberMe=value.rememberMe
  let captcha=true

   return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`,{email:email,password:password,rememberMe:rememberMe},
    {withCredentials:true,
    headers:{ "API-KEY":"ee99ed65-682d-46f1-957a-3bad477b92d0"}}).then(res => {
      
      if(res.data.resultCode==0){
       return 1
      }
         
})
.catch((er)=>{console.error(er)})}