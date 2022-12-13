import { useState } from 'react'

function Counter() {
  let [count, setCount] = useState(0)

  function addOne() {
    setCount(count + 1)
    count++
  }
  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}
function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
