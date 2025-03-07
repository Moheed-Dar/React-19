import { useContext } from 'react'
import { SubjectContext } from './ContextData'

function Student4() {
    const Subject = useContext(SubjectContext);
    return (
        <div className='bg-slate-600 p-10'>
            <h1 className='text-3xl font-extrabold'>Student4</h1>
            <h2 className='text-3xl text-yellow-400' >Subject is : {Subject} </h2>
        </div>
    )
}

export default Student4