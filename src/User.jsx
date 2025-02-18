import React from 'react'

function User({name,age,department}) {
    console.log(name.name)
    return (
        <div>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
            <h2  className='text-xl uppercase' >Department:{department}</h2>
        </div>

    )
}

export default User