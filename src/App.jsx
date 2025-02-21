import { useState } from 'react';
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <form action="" method="get"  >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Enter your username" />
        <br /><br />

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter your Email " />
        <br /><br />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter your password" />
        <br /><br />

        <button className='me-2' >submit</button>
        <button onClick={() => { setName(" "); setEmail(" "); setPassword(" ") }} >Clear</button>

        <h1>my username is :{name}</h1>
        <h1>my email is :{email}</h1>
        <h1>my password is :{password}</h1>

      </form>
    </>
  );
}
export default App;
