import { useState } from 'react';
function App() {
  const [val, setVal]=useState(" ")
  return (
    <>
      <h2>props in react 19 </h2>
      <input value={val}  placeholder="Enter some text" type='text' onChange={(e)=>setVal(e.target.value)}/>
      <h1>The value is : {val}</h1>
      <butto  onClick={()=>setVal("")} >Clear</butto>
      
    </>
  );
}
export default App;
