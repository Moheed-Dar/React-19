import { useState } from "react";

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
      <h1>Loop in JSX with map function</h1>
      <table className="border-collapse border border-black w-full">
        <thead>
          <tr className="border border-black">
            <th className="border border-black p-2">Name</th>
            <th className="border border-black p-2">Session</th>
            <th className="border border-black p-2">Department</th>
            <th className="border border-black p-2">Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className="border border-black">
              <td className="border border-black p-2">{user.name}</td>
              <td className="border border-black p-2">{user.session}</td>
              <td className="border border-black p-2">{user.department}</td>
              <td className="border border-black p-2">{user.rollnum}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default App;
