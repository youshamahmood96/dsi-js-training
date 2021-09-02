import React from "react";
import ShowUser from "./ShowUser";

function App() {
  const users = [
    {
        name:"John",
        age:23,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:"Kira",
        age:25,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:"Kim",
        age:28,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:"Ryan",
        age:50,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:"Rolf",
        age:60,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        avatar:"https://www.w3schools.com/howto/img_avatar.png"
    }
]
  return (
    <React.Fragment>
      {
        users.map((user,index)=>(<ShowUser key={index} user={user} />))
      }
    </React.Fragment>
  );
}

export default App;
