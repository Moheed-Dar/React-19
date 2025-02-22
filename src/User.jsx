import React from 'react'

function User({user}) {
  return (
    <div className='border-2 border-black p-10 m-10 rounded-xl w-1/3' >
        <h1>name:{user.name}</h1>
        <h1>session :{user.session } </h1>
        <h3>department :{user.department} </h3>
        <h2>rollnumber:{user.rollnum} </h2>
    </div>
  )
}

export default User