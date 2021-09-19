import React from "react";
import {Link } from "react-router-dom";

function Home() {
  return (
    <div>
        this is home
        <ul>
          <li><Link to='/about'>About Page</Link></li>
          <li><Link to='/contact'>Contact Page</Link></li>
        </ul>
    </div>
  );
}

export default Home;
