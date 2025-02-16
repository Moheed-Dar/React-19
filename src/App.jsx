import {useState} from 'react';
function App() {
    const [display,setDisplay] = useState(true)
  return (
    <>
          <button className="  p-4 rounded-2xl bg-yellow-500 mx-auto text-black m-2 flex  justify-center border-2 border-black outline-double  hover:bg-green-600 hover:text-white "  onClick={()=>setDisplay(!display)} >Toggle</button>
            
          {
            display?<div className="bg-green-500" ><h1  className="text-center text-black text-2xl">moheed dar</h1></div>:null
          }
    </>
  );
}
export default App;
