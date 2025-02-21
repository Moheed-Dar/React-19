import { useState } from 'react';
function App() {
  const [skills,setSkills] = useState([]);
  const handleskills=(event)=>{
    console.log(event.target.value,event.target.checked);
    if(event.target.checked){
      setSkills([...skills,event.target.value]);
    }else{
      setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }

  return (
    <>
      <input onChange={handleskills}  type="checkbox" id="v1" value="javascript"  />
      <label htmlFor="v1" >javascript</label>
      <br/><br/>
      <input onChange={handleskills} type="checkbox" id="v2" value="C++"  />
      <label htmlFor="v2" >C++</label>
      <br/><br/>
      <input onChange={handleskills} type="checkbox" id="v3" value="Java" />
      <label htmlFor="v3" >java</label>
      <br/><br/>
      <input onChange={handleskills} type="checkbox" id="v4"value="Python"  />
      <label htmlFor="v4" >python</label>
      <br/><br/>
      <h1>{skills.toString()}</h1>
    </>
  );
}
export default App;
