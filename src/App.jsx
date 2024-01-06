import { useState } from 'react'
import Home from './components/home'
import About from './components/about'
import Events from './components/event'
import Team from './components/team'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Home/>
    <About/>
    <Events/>
    <Team/>
   </div>
  )
}

export default App
