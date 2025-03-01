import React from 'react'
import User from './User.jsx'
function App() {
    const handleupdated =(name)=>{
        alert(name)
    }
    const getdata =()=>{
        alert("this is getdata field in snd")
    }
    return (
        <div>
                <User  handleupdated={handleupdated}  name='moheed' getdata={getdata} />
                <User  handleupdated={handleupdated}  name='saad' getdata={getdata} />
                <User  handleupdated={handleupdated}  name='usman' getdata={getdata} />
                <User  handleupdated={handleupdated}  name='zahid' getdata={getdata} />
        </div>
    )
}
export default App