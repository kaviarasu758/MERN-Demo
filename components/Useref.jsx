import React, { useEffect, useRef,useState } from 'react'

var Useref =()=>{
    var [text,settext]=useState("")
    var prevtext =useRef("")
    useEffect(()=>{
        prevtext.current=text
    },[text])
    return (
        <>
            <h1>This is the example of the useRef</h1>
            <input type="number" value={text} onChange={(e)=>settext(e.target.value)}/>
            <h2>My Current Render is {text}</h2>
            <h3>My Prev Render is {prevtext.current}</h3>   
        </>
    )
}

export default Useref
