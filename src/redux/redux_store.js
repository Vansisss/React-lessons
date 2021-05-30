import { combineReducers, createStore } from "redux";
import DialogReduser from "./dialog_reduser";
import ProfileReduser from "./profile_reducer";
import UsersReduser from "./users_reducer";


let redusers = combineReducers({
    ProfileState : ProfileReduser,
    DialogState : DialogReduser,
    UsersState : UsersReduser
})
let store = createStore(redusers)
export default store