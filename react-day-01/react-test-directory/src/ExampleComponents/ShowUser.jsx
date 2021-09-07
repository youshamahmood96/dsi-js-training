import React from 'react'


function ShowUser(props) {
    const {name,age,description,avatar} = props.user
    return (
        <div>
            <img alt="avatar" src={avatar} />
            <h1>{name}</h1>
            <h2>{age}</h2>
            <p>{description}</p>
            <button onClick={e=>console.log(e.nativeEvent)} >Button</button>
            
        </div>
    )
}

export default ShowUser
