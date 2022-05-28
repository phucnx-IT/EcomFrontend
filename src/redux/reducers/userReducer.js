import { USER } from "../defines";

const initialState={
    token:"",
    user:""
};
const userReducer = (state=initialState,action)=>{
switch (action.type){
    case USER.ADD_USER:
        return{
            ...state,
           user:action.dataUser
        }
    case USER.REMOVE_USER:
        return {
            ...state,
            token:"",
            user:""
        }
     case USER.ADD_TOKEN:
            return {
            ...state,
            token:action.token        
            }       
    default:
        return state
}
};
export default userReducer;