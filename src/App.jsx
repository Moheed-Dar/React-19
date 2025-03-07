import {useId} from 'react'

function App() {
  const email= useId()
  const name= useId()
  return (
    <div>
      <label htmlFor={email} >Enter your Email</label>
      <input id={email}  type ="text" placeholder="Enter your email"/>
      <label htmlFor={name} >Enter your Email</label>
      <input id={name}  type ="text" placeholder="Enter your email"/>
    </div>
  )
}

export default App