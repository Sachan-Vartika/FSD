import React from 'react'
import {useContext, createContext} from 'react'
function mycontext() {
  const myname = createContext('vartika');
  const value = useContext(myname);
  return (
    <div>
      <h1>value from context is : {value}</h1>
    </div>
  )
}

export default mycontext