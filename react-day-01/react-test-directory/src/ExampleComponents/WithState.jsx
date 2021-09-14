import React, { useState } from "react";

function WithoutState() {
  const [state,setState] = useState({name:'',password:''})
  const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }
  console.log(state);
  return (
    <div>
      <label htmlFor="name">Name</label>
     <input value={state.name} onChange={handleChange} name="name" type="text" />
     <br />
     <label htmlFor="password">password</label>
     <input value={state.password} onChange={handleChange} name="password" type="text" />
    </div>
  );
}

export default WithoutState;
