import { ADD_USER } from "../ActionTypes/userActions"

export const addUser = user => {
    return{
        type:ADD_USER,
        payload:user
    }
}