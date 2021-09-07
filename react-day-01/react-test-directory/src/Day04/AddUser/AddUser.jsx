import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'

function AddUser() {
    const [user,setUser] = useContext(UserContext)
    const [state,setState] = useState({
        id:user.length+1,
        name:'',
        age:'',
        description:'',
        avatar:'https://www.w3schools.com/howto/img_avatar.png'
    })
    const handleChange = e => {
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        setUser(prevState=>[...user,state])
    }
    return (
        <div>
        <form>
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
            <button onClick={handleSubmit} >Submit</button>
        </form>
    </div>
    )
}

export default AddUser
