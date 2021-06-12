import { combineReducers, createStore ,applyMiddleware} from "redux";
import DialogReduser from "./dialog_reduser";
import LoginReduser from "./login_reducer";
import ProfileReduser from "./profile_reducer";
import UsersReduser from "./users_reducer";
import thunkMiddleware from 'redux-thunk'


let redusers = combineReducers({
    ProfileState : ProfileReduser,
    DialogState : DialogReduser,
    UsersState : UsersReduser,
    LoginState: LoginReduser 
})
let store = createStore(redusers, applyMiddleware(thunkMiddleware))
export default store