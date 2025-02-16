import {useState} from 'react';
function App() {
    const [fruit,setFruit] = useState('Grapes')
    const handerfruit=()=>{
      setFruit("orange")
    }
  return (
    <>
        <h1>State in Reactjs</h1>
        <h1>{fruit} </h1>
        <button onClick={handerfruit} >Change</button>
    </>
  );
}
export default App;
