import React from "react";
// import ApiCall from "./ApiCall";
// import ShowUser from "./ShowUser";
// import { users } from "./users";

function App() {
  let count = 0
  const handleClick = (arg) =>{
    if(arg === '+'){
      count++
    }
    else{
      count--
    }
  }
  return (
    <React.Fragment>
   <button onClick={handleClick('+')} >Increase</button>
   <p>{count}</p>
   <button onClick={handleClick('+')} >decrease</button>  
    </React.Fragment>
  );
}

export default App;
