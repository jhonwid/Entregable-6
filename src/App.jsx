// 00:14.09
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purschases from './pages/Purschases'
import Header from './components/layout/Header'

function App() {

  return (
    <main className='grid grid-rows-[auto_1fr] min-h-screen'>
    <Header/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/products/id' element={<ProductDetail/>}/>

      <Route path='/purchases' element={<Purschases/>}/>
     </Routes>
    </main>
  )
}

export default App
