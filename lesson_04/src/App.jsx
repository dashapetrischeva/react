import { useState } from 'react'
import Messenger from './components/Messenger/'
import GuessNumber from './components/GuessNumber/'
import './App.css'

function App() {
  return (
    <>
      <div className="block">
        <h1>Messenger</h1>
        <Messenger />
      </div>
      <div className="block">
        <GuessNumber />
      </div>

    </>
  )
}

export default App
