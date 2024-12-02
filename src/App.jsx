import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../src/components/Home'
import Income from './components/income'
import Expenses from './components/Expenses'
import Saving from './components/Saving'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/income' element={<Income/>}/>
      <Route path='/expenses' element={<Expenses/>}/>
      <Route path='/savings' element={<Saving/>}/>
     </Routes>
    </>
  )
}

export default App