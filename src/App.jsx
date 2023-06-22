import React from 'react'
import Home from './pages/Home'
import Search  from './pages/Search'
import ProductDetailes from './pages/ProductDetailes'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      header
      {/* <br />
      <a href='/'>Home</a>
      <br />
      <a href='/About'>About</a>
      <br />
      <a href='/Contact'>Contact</a> */}

      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/search">Search</Link>
      


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/productdetailes/:productId' element={<ProductDetailes/>}/>
        
      </Routes>
      footer
      </BrowserRouter>

      

    </div>
  )
}

export default App