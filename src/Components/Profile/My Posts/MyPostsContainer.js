
import { connect } from 'react-redux';
import MyPosts from './MyPosts';




    let mapStateToProps =(state)=>{
      return{
        posts:state.ProfileState.posts
      }
    }
    let mapStateToDispatch=(dispatch)=>{
      return{
        addNewPost:()=>{dispatch({type:"addPosts"})},
        onpostNewChange:(text)=>{dispatch({type:'addChanges',postText:text})}
      }
    }
    const SuperMyPostsContainer = connect(mapStateToProps,mapStateToDispatch)(MyPosts)
    export default SuperMyPostsContainer;