import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
  const[count, setCount]= useState(0);
  function inc(){
    if(count<10){
      setCount(count+1)
    }else{
      alert("maximum number")
    }
  }
  function dec(){
    if(count>0){
      setCount(count-1)
    }else{
      alert("minimum number")
    }
  }
  return (
    <div style={{border:'2px solid red', height:'300px', width:'300px', backgroundColor: 'white'}}>
      <h1 style={{color:'black'}}>Counter app</h1>

      <button onClick={inc}>ADD +</button>
      <br/>
      <span>{count}</span>
      <br/>
      <button onClick={dec}>SUBTRACT -</button>
    </div>
  )
}

export default CounterApp