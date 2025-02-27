import {useState} from 'react'
import Counter from './Counter'

function App() {
    const [count, setCount] = useState(0)
    const [ display,setDisplay] = useState(true)
  return (
    <div>
        {
            display?<Counter counter={count}  ></Counter>:null
        }
    
    <button  onClick={()=>setCount(count+1)} > Count</button>
    <button onClick={()=>setDisplay(!display)} >Toggle</button>
    </div>
  )
}
export default App