import React from 'react'

import Nav from './Nav'
import Home from './Home'

function App () {
  return (
    <>
      <div className='title'>
        <img src='/images/santa.gif' />
        <h1>Santa's Shopping List </h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
