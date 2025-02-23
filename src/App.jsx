import {useState,useEffect} from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    useEffect(()=>{
        datatye();
        call();
    },[count])
    function datatye(){
        console.log("updated data")
    }
    function call(){
        console.log("call auto")
    }
  return (
    <div>
        <h1>useEffect hooks in React-19</h1>
        <h1>counter:{count} </h1>
        <h2>data:{data} </h2>
            <button  onClick={()=>setCount(count+1)} >Click</button>
            <button  onClick={()=>setData(data+1)} >Click</button>
    </div>
  )
}
export default App