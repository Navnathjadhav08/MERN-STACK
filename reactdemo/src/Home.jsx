import React, { useState } from 'react'
import {useEffect } from 'react'

const Home = () => {
  // const[data,setdata]=useState(0);
    const[count,setCount]=useState(0);
    useEffect(()=>{
    setTimeout(()=>
    {
      setCount((count)=>count+1);
    },100)
  },[]);
  return (
    <div>
      {
      <h1>{count}</h1>
      
      // <button onClick={()=>setCount}>Add</button>
      
      
      
      
      /* <h1>counter:{data}</h1>
      <button onClick={()=>setdata(data+1)}>Add</button>
      <button onClick={()=>setdata(data-1)}>Minus</button> */
      }
    </div>
  )
}

export default Home