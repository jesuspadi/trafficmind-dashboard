import React from 'react'
import { NavBar } from '../Layout/NavBar'
import { Footer } from '../Layout/Footer'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Index } from '../Pages/Index'

export const RoutesPages = () => {
  return (
    <Router>
    <div>
      {/* Navigation */}
      <NavBar/>

      {/* Routes */}
      <Routes>
        <Route index element={<Index/>} />
       
      </Routes>

      <Footer/>
    </div>
  </Router>
  )
}
