import React from 'react'

function User({user}) {
    return (
        <div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <h2  className='text-xl uppercase' >Department:{user.depart}</h2>
        </div>

    )
}

export default User