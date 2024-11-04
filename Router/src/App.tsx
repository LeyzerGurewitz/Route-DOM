
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import News from './Pages/News'
import Sport from './Pages/Sport'
import Users from './Pages/Users'

function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path='/sport' element={<Sport/>}></Route>
      <Route path='/users/:id' element={<Users/>}></Route>
    </Routes>
    </>
  )
}

export default App
