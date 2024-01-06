import { useEffect, useState } from 'react'
import { Reset } from 'styled-reset'
import './App.css'
import Contents from './Contents'
import MyInfo from './MyInfo'

function App() {
  const [todo, setTodo] = useState([])
  useEffect(() => {

  },[])


  return (
    <>
      <Reset />
      <div className="App">
        <MyInfo />
        <Contents />
      </div>
    </>
  )
}

export default App
