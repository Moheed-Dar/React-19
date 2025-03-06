import {useState} from 'react'
import Add from './Add'
import Display from './Display'

function App() {
    const [input,setInput]=useState('')
  return (
    <div>
        <Add  setInput={setInput} />
        <Display  Display={input} />

    </div>
  )
}

export default App