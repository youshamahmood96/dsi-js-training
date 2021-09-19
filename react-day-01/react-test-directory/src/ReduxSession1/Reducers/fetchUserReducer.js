import { FETCH_USERS } from "../ActionTypes/fetchUserActionTypes";

const initState = {
    users:[]
}

const fetchUserReducer = (state=initState,action)=>{
    switch (action.type) {
        case FETCH_USERS:
            return {
                users:action.payload
            };
    
        default:
            return state;
    }
}
export default fetchUserReducer