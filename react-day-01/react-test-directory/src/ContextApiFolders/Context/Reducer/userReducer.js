export default (state,action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users:[...state.users,action.payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                users:state.users.filter(usr=>usr.id!==action.payload)
            }
        default:
            return state;
    }
}