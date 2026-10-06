import React from 'react'

const App = () => {
  return (
    <div> 
      <div id='Header' style={{backgroundColor:'red'}}>
        <img src='https://www.abes.ac.in/assets/Logo.webp' height={'100px'} width={'300px'} align={'left'}/>
        <h1>ABES Engg. College</h1>
      </div>

      <div id='nav' style={{backgroundColor:'blue', margin:'20px', padding:'10px'}}>
        <a href='Header'>Home</a>
        <a href='About Us'>About Us</a>
        <a href='#'>Contact</a>
      </div>

      <div id='menu'>
        <h1>Restraunt</h1>
      {/* menu card */}
      </div>

    </div>

    
    
  )
}

export default App