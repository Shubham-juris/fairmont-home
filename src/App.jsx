import React from 'react'
import './App.css'
import { Navbar } from './components/common/Navbar'
import PageRotes from './routes/PageRotes'
import { Footer } from './components/common/Footer'

function App() {

  return (
    <>
   <Navbar/>
   <PageRotes/>
   <Footer/>
    </>
  )
}

export default App
