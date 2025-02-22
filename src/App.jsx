import { useState } from "react";
import User from "./User";

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    <h1>color changing Clock </h1>
    <select onChange={(e)=>setColor(e.target.value)} >
      <option value="red" >red</option>
      <option value="blue" >blue</option>
      <option value="orange" >orange</option>
      <option value="green" >green</option>
      
    </select>
     <User color={color} />
    </>
  );
}

export default App;
