import { useState } from 'react'
import './App.css'
import Temperature from './components/Temperature/'
import AthletesList from './components/AthletesList/'

function App() {
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
