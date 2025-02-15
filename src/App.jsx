import React from 'react';
function App() {
  const name = "moheed dar"
  let x = 20;
  let y = 10;
  function Fruit() {
    return "apple"
  }
  function Sum() {
    return "a is larger than b"
  }
  function Add(a, b) {
    return a + b
  }
  function operation(a,b,oper){
    if(oper=='+'){
      return a+b;
    }else if(oper=='-'){
      return a-b;
    }else{
      return a*b
    };
  }
  return (
    <div>
      <h1>{name} </h1>
      <h1>the total marks are {x + y} </h1>
      <h1>so the fruit name is {Fruit()}</h1>
      <h3>so in my knowledge i thought that {Sum()}</h3>
      <h1>Add result is {Add(24, 22)} </h1>
      <h2>{operation(10,10,'')} </h2>
    </div>
  );
}
export default App;
