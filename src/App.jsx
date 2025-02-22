import { useState } from "react";
import User from "./User";

function App() {
  const collageData = [
    {
      name: "Avicena science collage ",
      city: "muzaffarabad",
      student: [
        { name: "moheed" },
        { name: "danish" },
        { name: "manzar" }
      ]
    },
    {
      name: "Avicena science collage ",
      city: "muzaffarabad",
      student: [
        { name: "moheed" },
        { name: "danish" },
        { name: "manzar" }
      ]
    },
    {
      name: "Avicena science collage ",
      city: "muzaffarabad",
      student: [
        { name: "moheed" },
        { name: "danish" },
        { name: "manzar" }
      ]
    },
    {
      name: "Avicena science collage ",
      city: "muzaffarabad",
      student: [
        { name: "moheed" },
        { name: "danish" },
        { name: "manzar" }
      ]
    }
  ]
  return (
    <>
      <h1>color changing Clock </h1>
      <br /><br />
      {
        collageData.map((collage, ind) => (
          <div key={ind} className="h-screen" >
            <ul className=" w-auto bg-slate-600 text-white  " >
              <li>
                Name:{collage.name}
              </li>
              <li>
                city:{collage.city}
              </li>
              <li>
                <h1>Students</h1>
                {
                  collage.student.map((student, indo) => (
                    <ul key={indo}>
                      <li>  {student.name}   </li>
                    </ul>
                  ))
                }
              </li>
            </ul>
          </div>
        ))
      }
    </>
  );
}

export default App;
