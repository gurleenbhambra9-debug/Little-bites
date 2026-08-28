import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
// import Navbar from './components/Navbar'
import Login from './pages/Login'
import './index.css'
import Layout from './components/Layout'
import Register from './pages/Register'
import About from './pages/About'

function App() {
  

  return (
    <>
  
    <Routes>
      <Route element={<Layout/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
      </Route>

      <Route path='/login'  element={<Login/>}/>
      <Route path='/register'  element={<Register/>}/>
   
    </Routes>
      

    </>
  )
}

export default App
