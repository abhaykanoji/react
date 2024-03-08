import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount] = useState(1)

  let addup=()=>{
    if(count<20){
      setcount(count +1)
    }
  }
  let adddown = ()=>{
    if(count>0){
      setcount(count -1)
  }
}

  return (
    <>
      <h1>counter : {count}</h1>
      <button onClick={addup}>increase</button>
      <button onClick={adddown}>decrease</button>
    </>
  )
}

export default App
