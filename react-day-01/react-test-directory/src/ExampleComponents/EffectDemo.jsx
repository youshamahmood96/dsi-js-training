import React, { useEffect, useState } from "react";

function EffectDemo(props) {
  const {name} = props.data
  const [state, setState] = useState(null);
  useEffect(() => {
    console.log("I am the effect");
    return () => {
      console.log("I run after re-render, but before the next useEffect");
    };
  });
  console.log("I am just part of render");
  return (
    <>
      <button
        onClick={() => {
          setState("Some v. important state.");
        }}
      >
        Click me
      </button>
      <p>state: {state}</p>
      <h1>{name}</h1>
    </>
  );
}

export default EffectDemo;
