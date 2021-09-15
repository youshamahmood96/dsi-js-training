import { ADD_USER, DELETE_USER } from "../ActionTypes/userActionTypes"
export const addUser = user => {
    return {
        type:ADD_USER,
        payload:user
    }
}
export const deleteUser = id => {
    return{
        type:DELETE_USER,
        payload:id
    }
}
