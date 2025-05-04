
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Marketing from './components/marketing'
import Distribution from './components/distribution'
import ExportsPDF from './components/exports_pdf'
import './styles/media.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Marketing/>,
  }
  ,
  {
    path : '/distributions',
    element : <Distribution/>,
  }
  ,
  {
    path : '/exports-pdf',
    element : <ExportsPDF/>,
  }
  
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
