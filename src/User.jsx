import React from 'react'

function User({handleupdated,name,getdata}) {
  return (
    <div>
        <button  onClick={()=>handleupdated(name)} >Updated</button>
        <button  onClick={getdata} >Getdata</button>
    </div>
  )
}

export default User