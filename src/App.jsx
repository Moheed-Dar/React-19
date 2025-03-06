import { useState } from 'react'
function App() {
    return (
        <div>
            <h1 className=' text-center text-3xl' >Drived State in React-19</h1>
            <Drived />
        </div>
    )
}
const Drived = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const handleAddUsers = () => {
        setUsers([...users, user])
    }
    const total = users.length;
    const last = users[users.length - 1];
    const unique = [...new Set(users)].length;
    return (
        <>
            <h2> Total User : {total} </h2>
            <h2> Last user: {last}  </h2>
            <h2> Total Unique Users :  {unique} </h2>
            <div className="text-center" >
                <input onChange={(event) => setUser(event.target.value)} type="text" placeholder="add new user" />
                <button onClick={handleAddUsers} >Update</button>
            </div>
            {users.map((item, index) => (
                <h4 key={index} >{item} </h4>
            ))}
        </>
    )
}
export default App