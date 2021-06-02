
import { connect } from 'react-redux';
import MyUsers from'./MyUsers'




    let mapStateToProps =(state)=>{
      return{
        users:state.UsersState.users,
        CountofPages:state.UsersState.CountofPages,
        page:state.UsersState.page,
        isFatchings:state.UsersState.isFatchings
      }
    }
    let mapStateToDispatch=(dispatch)=>{
      return{
        follow:(userID)=>{dispatch({type:"Follow",userID})},
        unfollow:(userID)=>{dispatch({type:"Unfollow",userID})},
        setUsers:(newUsers)=>{dispatch({type:'setUsers',newUsers})},
        setPages:(newPage)=>{dispatch({type:'setPage',newPage})},
        isFatching:(isFatch)=>{dispatch({type:'isFatching',isFatch})}
     
      }
    }
    const SuperMyUsersContainer = connect(mapStateToProps,mapStateToDispatch)(MyUsers)
    export default SuperMyUsersContainer; 