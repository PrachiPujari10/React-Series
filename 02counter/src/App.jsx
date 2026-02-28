import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {           // ✅ upper limit condition
      setCounter(prev => prev + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {            // ✅ lower limit condition
      setCounter(prev => prev - 1)
    }
  }

  return (
    <>
      <h1>First React Project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value
      </button>

      <br /><br />

      <button onClick={removeValue}>
        Decrease value
      </button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App