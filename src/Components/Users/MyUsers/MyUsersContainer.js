
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLogRedirect } from '../../../hoc/withLogRedirectComponent';
import { follow, getUsersThunk, isFatching, setPages, setUsers, unfollow,postFollowThunk,deleteFollowThunk } from '../../../redux/users_reducer';
import MyUsers from'./MyUsers'




    let mapStateToProps =(state)=>{
      return{
        users:state.UsersState.users,
        CountofPages:state.UsersState.CountofPages,
        page:state.UsersState.page,
        isFatchings:state.UsersState.isFatchings,
         
      }
    }
    
 
    
    
    export default compose(
      connect(mapStateToProps,{unfollow,follow,setPages,setUsers,getUsersThunk,isFatching,postFollowThunk,deleteFollowThunk}),
      withLogRedirect
    )(MyUsers)