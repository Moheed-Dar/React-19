import { useState } from 'react'
import Student1 from './Student1'
import { SubjectContext } from './ContextData'
function App() {
  const [subject, setSubject] = useState('Select the value')
  return (
    <>
      <SubjectContext.Provider value={subject} >
        <h1>Context API</h1>
        <select onChange={(e) => setSubject(e.target.value)}  >
          <option value="" >Select Data</option>
          <option value="Apple" >Apple</option>
          <option value="banana" >banana</option>
          <option value="Orange" >Orange</option>
          <option value="Peach" >Peach</option>
        </select>
        <Student1 />
      </SubjectContext.Provider>
    </>
  )
}
export default App