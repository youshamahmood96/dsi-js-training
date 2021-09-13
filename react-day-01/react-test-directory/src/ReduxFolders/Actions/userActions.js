import { ADD_USER } from "../Actiontypes/userActionTypes"

export const addUser = user => {
    return{
        type:ADD_USER,
        payload:user
    }
}