import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//  let counter = 5
 let [counter,setCounter]  = useState (15)
 const addValue =() =>{
 counter=counter+1;
 if(counter <=20 ){setCounter(counter)}
 }
 const removeValue =() =>{
  counter=counter-1;
  if(counter >=0){setCounter(counter)}
  }
  return (
    <>
      <h1>react aur practice on 2/3/24 </h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
