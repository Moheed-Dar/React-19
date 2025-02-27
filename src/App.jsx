import {useState} from 'react'
import Counter from './Counter'

function App() {
    const [count, setCount] = useState(0)
  return (
    <div>
    <Counter counter={count} />
    <button  onClick={()=>setCount(count+1)} > Count</button>
    </div>
  )
}
export default App