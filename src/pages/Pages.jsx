import React from 'react'
import Home from './Home/Home'
import Cuisine from './Cuisine/Cuisine'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Searched from './Searched/Searched'
import Recipe from './Recipe/Recipe'


const Pages = () => {
  const location = useLocation()
  return (
    <Routes Location={location} key={location.pathname}>
      <Route path="/" element={ <Home /> } />
      <Route path="/cuisine/:type" element={ <Cuisine /> } />
      <Route path="/searched/:search" element={ <Searched /> } />
      <Route path="/recipe/:name" element={ <Recipe /> } />
    </Routes>
  )
}

export default Pages