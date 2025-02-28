import { useRef } from 'react'
function App() {
    const h1Ref = useRef(null);
    const divRef = useRef(null);
    const h1Handler = () => {
        h1Ref.current.style.color = "yellow"
    }
    const divhandler = () => {
        divRef.current.style.backgroundColor = "black"
    }
    const handleclick =()=>{
        h1Handler();
        divhandler();
    }
    const h2Ref = useRef(null);
    const div1Ref = useRef(null);
    const h2Handler = () => {
        h1Ref.current.style.color = "red"
    }
    const div1handler = () => {
        divRef.current.style.backgroundColor = "orange"
    }
    const handle1click =()=>{
        h2Handler();
        div1handler();
    }
    const h3Ref = useRef(null);
    const div2Ref = useRef(null);
    const h3Handler = () => {
        h1Ref.current.style.color = "aqua"
    }
    const div2handler = () => {
        divRef.current.style.backgroundColor = "red"
    }
    const handle2click =()=>{
        h3Handler();
        div2handler();
    }
    return (
        <div className="flex ">
            <div ref={divRef} className='w-40 h-40 bg-amber-400 rounded-sm  ' >
                <h1 ref={h1Ref} className='text-3xl uppercase text-center  ' >moheed dar</h1>
            </div>
            <button onClick={handleclick} className='w-4 h-4 ms-10 mt-5 rounded-full bg-green-600' ></button>
            <button onClick={handle1click} className='w-4 h-4 ms-10 mt-5 rounded-full bg-red-600' ></button>
            <button onClick={handle2click} className='w-4 h-4 ms-10 mt-5 rounded-full bg-blue-600' ></button>
        </div>
    )
}
export default App