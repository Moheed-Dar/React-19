import { useState } from 'react';
import User from './User';
import Student from './Student'
import Wrapper from './Wrapper'
function App() {
    let userobje ={
      name : 'moheeddar',
      class: 'bsit',
      rollnum : 10,
      session: 2021-2025,
      depart: 'bsit'
    };
    let userobjc ={
      name : 'moheeddars',
      class: 'bsits',
      rollnum : 102,
      session: 2021-2025,
      depart: 'bsits'
    };
    let userobja= {
      name : 'moheeddar',
      class: 'bsit',
      rollnum : 10,
      session: 2021-2025,
      depart: 'bsit'
    }
     let collagename = [ 'let','const','delta','omigla']

     const [student,setStudent] = useState()
  
  return (
    <>
      <h2>props in react 19 </h2>
      {
        student && <Student name={student}/>
      }
      <button onClick={()=>setStudent("moheed dar")} >update the data</button>
      <Student  name={collagename[0]} />
      <User user={userobje}/>
      <User user={userobjc}/>
      <User user={userobja}/>   
      <Wrapper>
        <h2>moheed dar</h2>
      </Wrapper>
    </>
  );
}
export default App;
