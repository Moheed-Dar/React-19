import { useState } from "react";
import User from "./User";

function App() {
  const userData = [
    {
      name: "moheed dar",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 10,
    },
    {
      name: "noman khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 9,
    },
    {
      name: "daod khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 11,
    },
    {
      name: "shaheen",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 35,
    },
    {
      name: "daod khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 11,
    },
    {
      name: "shaheen",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 35,
    },
    {
      name: "daod khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 11,
    },
    {
      name: "shaheen",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 35,
    },
    {
      name: "daod khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 11,
    },
    {
      name: "shaheen",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 35,
    },
    {
      name: "daod khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 11,
    },
    {
      name: "shaheen",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 35,
    },
    {
      name: "daod khan",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 11,
    },
    {
      name: "shaheen",
      session: "2021-2025",
      department: "BSIT",
      rollnum: 35,
    },
  ];

  return (
    <>
    <h1>reuse Component in loop</h1>

      {
        userData.map((user,dat)=>(
          <div key={dat}>
            <User   user={user} />
          </div>
        ))
      }
     
    </>
  );
}

export default App;
