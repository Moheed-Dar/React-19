import React from 'react'
import Student3 from './Student3'
import Student4 from './Student4'
function Student2() {
  return (
    <div className='bg-green-600 p-10'>
        <h1 className='text-3xl font-extrabold'>Student1</h1>
        <Student3/>
        <br/>
        <hr/>
        <br/>
        <Student4/>
    </div>
  )
}

export default Student2