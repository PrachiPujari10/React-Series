//import { useState } from 'react'

import './App.css'
import Card from './Components/card'

function App() {
  
 let Myobj={
  username: "Prachi",
  age:19
 }

 let newArr =[1,2,3]
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind test</h1>
       <Card  username="coffee aur Code" someObje={newArr} btnText="Click me"/>
       <Card username="Prachi" someObje={newArr} btnText="visit me"/>
      
  
    </>
  )
}

export default App
