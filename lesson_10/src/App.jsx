

import './App.css'
import { ThemeContext } from './context/ThemeContext'

import AppRoutes from './router/AppRoutes'

function App() {

  const theme = 'light'
  return (
    <ThemeContext value={theme}>
      <AppRoutes />
    </ThemeContext>
  )
}

export default App
