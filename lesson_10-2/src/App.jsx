
import AppRoutes from './router/AppRoutes'
import TravelPlanningProvider from './provider/TravelPlanningProvider'
import './App.css'
function App() {
  return (

    <TravelPlanningProvider>
      <AppRoutes />
    </TravelPlanningProvider>

  )
}

export default App
