import { useState } from 'react'; 
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import TopBar from './components/TopBar';
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
    <TopBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )   
}

export default App
