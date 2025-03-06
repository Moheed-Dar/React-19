import {useState} from 'react'


function App() {
    const [data,setData] =useState({
        name:'moheed dar',
        address:{
            city:'',
            country:'pakistan'
        }
    })
    const handlename=(val)=>{
        data.name=val
        setData({...data})
    }
    const handlecity=(val)=>{
        data.address.city=val
        setData({...data,address:{...data.address,city}})
    }
  return (
    <div>
        <h1> Updating Objects in State </h1>
        <hr/>
        <input  onChange={(event)=>handlename(event.target.value)}  type="text"  placeholder="Enter your name" />
        <h1>Name: {data.name} </h1>
        <hr/>
        <input  onChange={(event)=>handlecity(event.target.value)}  type="text"  placeholder="Enter your name" />
        <h1>City: {data.address.city} </h1>

    </div>
  )
}

export default App