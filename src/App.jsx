import { useState } from 'react'
import './App.css'
import LeftPanel from './components/layout/left-panel'
import RightPanel from './components/layout/right-panel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LeftPanel />
    <RightPanel/>
    </>
  )
}

export default App
