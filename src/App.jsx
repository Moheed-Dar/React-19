import { useState } from 'react';
import User from './User';
function App() {
    let userobj ={
      name : 'moheeddar',
      class: 'bsit',
      rollnum : 10,
      session: 2021-2025,
      depart: 'bsit'
    }
  return (
    <>
      <h2>props in react 19 </h2>
      <User user={userobj} />
    </>
  );
}
export default App;
