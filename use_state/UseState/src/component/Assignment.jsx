import React from 'react'
import { useState } from 'react'

const Assignment = () => {
    const[rowCount, setRow]= useState(200);
    const [colmCount, setColm]=useState(200);
    
    function increaserow(){
      setRow(rowCount+10)
    }
    function increasecolm(){
      setRow(colmCount+10)
    }
    function decreasecolm(){
      setColm(colmCount-10)
    }
    function decreaserow(){
      setColm(rowCount-10)
    }
    
    return (
      <div style={{border:'2px solid red', height:'600px', width:'600px', backgroundColor: 'white'}}>
        <h1>cbhdj</h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrvexHfBXhgkFAG8tdl9TK_JWfWk8ifmv5P96KEvBDd0_dtHKFHyaZFc_&s=10' style={{height:'${rowCount}px', width:'${colmCount}px'}}/>
        <br/>
        <button onClick={increaserow}>row +</button>
        <span> </span>
        <button onClick={decreaserow}>row -</button>
        <br/>
        <button onClick={increasecolm}>colm +</button>
        <span> </span>
        <button onClick={decreasecolm}>colm -</button>
      </div>
    )
}
export default Assignment
