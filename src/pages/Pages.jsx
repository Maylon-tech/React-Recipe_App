import React from 'react'
import Home from './Home/Home'
import Cuisine from './Cuisine/Cuisine'
import {
  Routes,
  Route
} from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cuisine" element={ <Cuisine /> } />
    </Routes>
  )
}

export default Pages