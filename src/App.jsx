import {useRef} from 'react'
import User from './User.jsx'
function App() {
    const inputref = useRef(null);
    const handleinput=()=>{
        inputref.current.focus();
        inputref.current.value="hello"
    }
    return (
        <div>
             <User  ref={inputref}  />
             <button onClick={handleinput}>Click</button>
        </div>
    )
}
export default App