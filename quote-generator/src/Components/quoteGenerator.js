import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./quoteGenerator.css"


function QuoteGenerator() {

    const [quote, setQuote] = useState("");

    const getQuote = () => {
      fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
          let randomNum = Math.floor(Math.random() * data.length)
          setQuote(data[randomNum])
        })
    }
  
    useEffect(() => {
      getQuote();
    }, [])

  
  return (

    <div className="container">
        <div className="Header"><h1>Quote Generator</h1></div>
        <div className="Quotes">
            <p><b>{quote.text}</b></p>
            <p>-{quote.author}-</p>
        </div>

        <div className="button">
            <button className="getQuote" type="button" onClick={getQuote}>Get Quote</button>
        </div>
        
    </div>

  )
  
}

export default QuoteGenerator