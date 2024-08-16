import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Content from './components/content'
import Footer from './components/Footer/Footer'
import Boody from './components/Boody/Boody'


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Boody/>
      <Footer/>
    </div>

  )
}

export default App

