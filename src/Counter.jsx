import {useEffect} from 'react'

const Counter =({counter})=>{

    let handleFunction=()=>{
        console.log("handle function")
    }
    
    useEffect(()=>{
        handleFunction();
    },[])
    return(
        <div>
            <h1>Counter value : {counter} </h1>
        </div>
    )
}

export default Counter