import React from 'react'

function User({user}) {
    return (
        <div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.class}</h1>
            <h1>Name:{user.rollnum}</h1>
            <h1>Age:{user.session}</h1>
            <h2  className='text-xl uppercase' >Department:{user.depart}</h2>
            <hr/>
        </div>

    )
}

export default User