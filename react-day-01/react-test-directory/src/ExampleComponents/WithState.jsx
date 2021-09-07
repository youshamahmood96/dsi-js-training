import React, { useState } from "react";

function WithoutState() {
  const [state,setState] = useState({name:'',password:''})
  const handleChange = (e,arg) => {
    if(arg === 'name'){
      setState({...state,name:e.target.value})
    }
    else{
      setState({...state,password:e.target.value})
    }
  }
  return (
    <div>
      <label htmlFor="">Name</label>
     <input onChange={e=>handleChange(e,'name')} type="text" />
     <br />
     <label htmlFor="">password</label>
     <input onChange={e=>handleChange(e,'pass')} type="text" />
    </div>
  );
}

export default WithoutState;
