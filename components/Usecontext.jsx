import React from 'react'
import Comp2 from '../contextComponents/comp2'

export var Themeprovider =React.createContext()
const UseContext = () => {
    
  return (
    <>
        <Themeprovider.Provider value={{CGPA :"10.00", gpa :"9.8"}}>
        <h1>This is EXAMPLE</h1>
        <Comp2/>
        </Themeprovider.Provider>
    </>
  )
}

export default UseContext