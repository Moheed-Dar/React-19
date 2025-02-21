import { useState } from 'react';
function App() {
  const [gender, setGender] = useState("female")
  return (
    <>
    <h1>radio and dropdown states</h1>
        <input checked={gender == "male"} onChange={(e)=>setGender(e.target.value)} type="radio" name="gender"  id="male" value="male"  />
        <label htmlFor='male' >male</label>
        <input checked={gender == "female"} onChange={(e)=>setGender(e.target.value)} type="radio" name="gender"  id="female" value="female"  />
        <label htmlFor='female' >female</label>
        <h1>Selected gender is :{gender} </h1>
    </>
  );
}
export default App;
