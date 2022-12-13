import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(['Jack', 'jill', 'John'])
  const [name, setName] = useState('')

  const onAddName = () => {
    setList([...list, name])
    setName('')
  }
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>save</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

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
      <NameList />
    </div>
  )
}

export default App
