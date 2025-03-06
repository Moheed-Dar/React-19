import React from 'react'

function App() {
  return (
    <div>
        <h1>pure Components in React-19</h1>
        <Student  student={25} name="bscs" />
        <Student  student={15} name="bsit" />
    </div>
  )
}
const Student=({student,name})=>{
    let count=student;
    
    return(
        <h1>there are {count } students are study in {name}.</h1>
    )
}

export default App