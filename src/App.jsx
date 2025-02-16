import {useState} from 'react';
function App() {
    const [count, setCount] = useState(0);
    const add=()=>{
      setCount(count+1)
    }
    const del=()=>{
      setCount(count-1)
    }
  return (
    <>
        <h1>State in Reactjs</h1>
        <h1>{count} </h1>
        <button onClick={add} >Add</button>
        <button onClick={del} >Del</button>
    </>
  );
}
export default App;
