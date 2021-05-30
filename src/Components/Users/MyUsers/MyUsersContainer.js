
import { connect } from 'react-redux';
import MyUsers from'./MyUsers'




    let mapStateToProps =(state)=>{
      return{
        users:state.UsersState.users
      }
    }
    let mapStateToDispatch=(dispatch)=>{
      return{
        follow:(userID)=>{dispatch({type:"Follow",userID})},
        unfollow:(userID)=>{dispatch({type:"Unfollow",userID})},
        setUsers:(newUsers)=>{dispatch({type:'setUsers',newUsers})}
        
     
      }
    }
    const SuperMyUsersContainer = connect(mapStateToProps,mapStateToDispatch)(MyUsers)
    export default SuperMyUsersContainer; 