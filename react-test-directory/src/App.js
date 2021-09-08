import React from "react";
import Test from "./Test";

function App(props) {
  return (
    <React.Fragment>
      <div className="App">
      <Test text={'Hello'} >
        <Test/>
      </Test>
     </div>
    </React.Fragment>
  );
}

export default App;
