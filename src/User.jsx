import { useEffect, useState } from 'react'

function User({color}) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <div  >
            <h1  style={{color:color}} className='bg-black font-bold  w-30 p-2 rounded-xl ps-5 ' >{time}</h1>
        </div>
    )
}

export default User