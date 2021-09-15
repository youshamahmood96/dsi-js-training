import axios from 'axios'
import { FETCH_USERS } from '../ActionTypes/userActionTypes'
export const fetchUsers = async(dispatch) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type:FETCH_USERS,
        payload:res.data
    })
}