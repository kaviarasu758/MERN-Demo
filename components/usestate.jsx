import React, { useEffect, useState, } from 'react'
import axios from 'axios'


const Usestate = () => {
  // var [text,settext] = useState("Kongu");
  // useEffect(()=>{
  //   console.log(text)
  // },[text])
  // return(
  //     <>
  //     <h1>Use Effect</h1>
  //     <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}}/>
  //     <h1>The Text is {text} </h1>
  //     </>
  // )


  var [post, setpost] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
      console.log(res.data);
      setpost(res.data)
    }).catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Fetching data from JSON placeholder API</h1>
      <h2>posts are </h2>
      <ol>
        {post.map((data, index) => (
          <li key={index}>
            {data.title}
          </li>
        ))}
      </ol>
    </>
  )
}

export default Usestate