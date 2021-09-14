import React from "react";
import AddUSer from "../AddUser/AddUSer";
import GlobalState from "../Context/UserContext";
import NavBar from "../NavBar/NavBar";
import UserList from "../UserList/UserList";

function ContextSession() {
  return (
    <div>
      <GlobalState>
        <NavBar/>
        <UserList />
        <AddUSer/>
      </GlobalState>
    </div>
  );
}

export default ContextSession;
