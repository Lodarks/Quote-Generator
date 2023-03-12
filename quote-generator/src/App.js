import React from 'react'
import QuoteGenerator from './Components/quoteGenerator'
import Footer from './Components/Footer'
import "../src/App.css"


function App() {
  return (
    <div className="MainContainer">
    <QuoteGenerator/>
    <Footer/>
    </div>
  )
}

export default App