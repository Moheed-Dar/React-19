import { useState } from 'react';
function App() {
  const [country,setCountry] =useState( "pak")
  return (
    <>
        <h1>select city:{country} </h1>
        <select onChange={(e)=>setCountry(e.target.value)} >
          <option  >Muzaffarabad</option>
          <option>Muzaffarghar</option>
          <option>pindi</option>
          <option>noshahrah</option>
        </select>
    </>
  );
}
export default App;
