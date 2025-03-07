import {useId} from 'react'

function App() {
  const user= useId()
  return (
    <div>
      <label htmlFor={user+"email"} >Enter your Email</label>
      <input id={user+"email"}  type ="text" placeholder="Enter your email"/>
      <label htmlFor={user+"name"} >Enter your Email</label>
      <input id={user+"name"}  type ="text" placeholder="Enter your email"/>
    </div>
  )
}

export default App