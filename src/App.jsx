import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from './component/Hero/Home'
import MovieDisplay from './component/MovieDisplay/MovieDisplay'
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/moviedisplay/:id' element={<MovieDisplay />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
