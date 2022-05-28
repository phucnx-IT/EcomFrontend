import { USER } from "../defines"
export const addUser = (dataUser)=>({
    type:USER.ADD_USER,
    dataUser
});
export const removeUser = ()=>({
   type: USER.REMOVE_USER
})
export const addToken=(token)=>({
   type: USER.ADD_TOKEN,
    token
})