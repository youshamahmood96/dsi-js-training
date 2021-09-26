import { userActions } from "../ActionTypes/userACtionTypes"

export const showUser = () => {
    return{
        type:userActions.SHOW_USER
    }
}

export const addUser = user => {
    return{
        type:userActions.ADD_USER,
        payload:user
    }
}
export const deleteUser = id => {
    return{
        type:userActions.DELETE_USER,
        payload:id
    }
}