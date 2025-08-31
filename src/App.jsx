import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Pricing from './pages/pricing/Pricing'
import Work from './pages/work/Work'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Error from './pages/error/Error'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/work' element={<Work />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App