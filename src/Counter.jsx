import {useEffect} from 'react'

const Counter =({counter})=>{
//mounting function 
    let handleFunction=()=>{
        console.log("mounting 1 ")
    }

    useEffect(()=>{
        handleFunction();
    },[])
// updated function in react
    let updateFunction=()=>{
        console.log("updated function ")
    }
    useEffect(()=>{
        updateFunction();
    },[Counter])

    //unmounting function in react 
    useEffect(()=>{
        return ()=>{
            console.log("unmounted")
        }
    },[])
    return(
        <div>
            <h1>Counter value : {counter} </h1>
        </div>
    )
}

export default Counter