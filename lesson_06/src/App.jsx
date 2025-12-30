
import Calculator from './components/calculator/Calculator'
import ShowWindowSize from './components/windowSize/ShowWindowSize'
import { notebooksList } from './data/3_data_notebooks.js'
import './App.css'
import DebouncedSearch from './components/debouncedSearch/DebouncedSearch.jsx'
import DataGrid from './components/tableWithFilteringAndSorting/DataGrid.jsx'
function App() {


  return (
    <>
      <Calculator />
      <DataGrid />
      <ShowWindowSize />
      <DebouncedSearch items={notebooksList} />
    </>

  )
}

export default App
