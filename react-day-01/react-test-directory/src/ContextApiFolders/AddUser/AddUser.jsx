import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'

function AddUser() {
    const {users,addUser} = useContext(UserContext)
    const [state,setState] = useState({
        id:users.length+1,
        name:"",
        age:"",
        description:"",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    })
    const handleChange = e =>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        addUser(state)
    }
    return (
        <div>
            <form>
                <label htmlFor="">Id : </label>
                <br />
                <input readOnly value={users.length+1} type="text" name="name" />
                <br />
                <label htmlFor="">Name : </label>
                <br />
                <input onChange={handleChange} type="text" name="name" />
                <br />
                <label htmlFor="">Age : </label>
                <br />
                <input onChange={handleChange} type="number" name="age" id="" />
                <br />
                <label htmlFor="">Description : </label>
                <br />
                <input onChange={handleChange} type="text" name="description" id="" />
                <br />
                <label  htmlFor="">Avatar : </label>
                <br />
                <input type="text" readOnly name="avatar" value="https://www.w3schools.com/howto/img_avatar.png" id="" />
                <br />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default AddUser
