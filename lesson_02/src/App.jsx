import Authorization from './components/Authorization/'
import TicketSelection from './components/TicketSelection/'
import './App.css'
import EnglishTrainer from './components/EnglishTrainer/'
import WorkersList from './components/WorkersList/'
import SearchResult from './components/SearchResult/'
import KitchenOrders from './components/KitchenOrders/'

function App() {


  return (
    <div className="container">
      <div className="block">
        <Authorization />
      </div>
      <div className="block">
        <TicketSelection />
      </div>
      <div className="block">
        <EnglishTrainer />
      </div>
      <div className="block">
        <WorkersList />
      </div>
      <div className="block">
        <SearchResult />
      </div>
      <div className="block">
        <KitchenOrders />
      </div>
    </div>
  )
}

export default App  
