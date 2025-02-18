import React from 'react'

function Student({name}) {
    console.log(name)
  return (
    <div>
        <h1>Student name :{name}</h1>
    </div>
  )
}

export default Student