import { useState } from 'react'
import './App.css'
import Temperature from './components/Temperature/'
import AthletesList from './components/AthletesList/'
import SimpleSaperReact from './components/SimpleSaper/SimpleSaperReact/'
function App() {
  const [gameField, setGameField] = useState([
    {
      id: 1,
      hasMine: 0
    },
    {
      id: 2,
      hasMine: 1
    },
    {
      id: 3,
      hasMine: 0
    },
    {
      id: 4,
      hasMine: 0
    },
    {
      id: 5,
      hasMine: 1
    },
    {
      id: 6,
      hasMine: 0
    }
  ])
  return (
    <div className="container">
      <div className="block">
        <Temperature />
      </div>
      <div className="block">
        <AthletesList />
      </div>

    </div>
  )
}

export default App
