import { combineReducers, createStore } from "redux";
import DialogReduser from "./dialog_reduser";
import ProfileReduser from "./profile_reducer";


let redusers = combineReducers({
    ProfileState : ProfileReduser,
    DialogState : DialogReduser
})
let store = createStore(redusers)
export default store