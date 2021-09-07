import React from "react";
import AddUser from "../AddUser/AddUser";
import UserProvider from "../Context/UserContext";
import NavBar from "../NavBar/NavBar";
import UserList from "../UserList/UserList";

function ContextSimple() {
  return (
    <UserProvider>
      <NavBar />
      <UserList />
      <AddUser />
    </UserProvider>
  );
}

export default ContextSimple;
