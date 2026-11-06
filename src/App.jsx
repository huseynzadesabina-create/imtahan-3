import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import Detail from './Pages/Details/Detail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={<Layout/>}>
            <Route index element={<Home/>} />
          <Route path='/details' element={<Detail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
