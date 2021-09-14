import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'

function AddUSer() {
    const defaultState = {
        id:`${Date.now() + Math.random()}`,
        name:"",
        age:"",
        description:"",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    }
    const [user,setUser] = useContext(UserContext)
    const [state,setState] = useState(defaultState)
    const {name,age,description} = state
    const handleChange = e =>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        setUser([...user,state])
        setState(defaultState)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <br />
                <label htmlFor="">Name : </label>
                <br />
                <input value={name} onChange={handleChange} type="text" name="name" />
                <br />
                <label htmlFor="">Age : </label>
                <br />
                <input value={age} onChange={handleChange} type="number" name="age" id="" />
                <br />
                <label htmlFor="">Description : </label>
                <br />
                <input  value={description} onChange={handleChange} type="text" name="description" id="" />
                <br />
                <input type="submit" value="Add User" />
                <br />
            </form>
        </div>
    )
}

export default AddUSer
