import React from 'react'
import Student2 from './Student2'

function Student1() {
  return (
    <div  className='bg-amber-600 p-10' >
         <h1 className='text-3xl font-extrabold'>Student1</h1>
            <Student2/>
    </div>
  )
}

export default Student1