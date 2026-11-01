import React, { useState,useEffect } from 'react'

const App = () => {
  const[formData, setformData]=useState({
    name: '',
    email:'',
    password:' '
  })

  useEffect(()=>{

  },[formData])

  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Registration Successfully");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter Name' value={formData.name} onChange={handleChange}/>
        <br/>
        <input type="email" name="email" placeholder='Enter E-mail' value={formData.email} onChange={handleChange}/>
        <br/>
        <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleChange}/>
        <br/>
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App
