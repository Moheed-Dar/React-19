import React from 'react'
 import styled from 'styled-components'

function App() {
    const Header = styled.h2({
        color:'red',
        border:'10px solid green ',
        borderRadius:'10px'
    })
    const H1 = styled.h2`
    color:orange;
    background-color:black;
    border:2px dotted red;
    border-radius:10px;

    `
   
  return (
    <div>
    <Header>moheed</Header>
    <H1>Styled components </H1>
    </div>
  )
}
export default App