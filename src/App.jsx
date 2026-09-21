//http://localhost:5173/
//rafce

//npm run dev
import React from 'react'
import Student1 from './Components/Student1'

const App = () => {
  return (
    <div>
      <h1>Details</h1>
      <div style={{display:'flex', gap:'20px'}}>
        <Student1/>
        <br/>
        <Student1/>
        <br/>
        <Student1/>
        <br/>
      </div>
      
    </div>
  )
}

export default App
