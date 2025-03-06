import React from 'react'

function Add({setInput}) {
  return (
    <div>
        <h1> lifting components with state </h1>
        <input type="text" onChange={(event)=>setInput(event.target.value)} placeholder="Enter your Text"/>
        <hr/>

    </div>
  )
}

export default Add