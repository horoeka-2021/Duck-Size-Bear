import React from 'react'
import Children from './Children'
import { Route } from 'react-router-dom'

function App () {
  return (
    <>
      <div className='title'>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <h3>Home</h3>
        <Route path='/children' component={Children}/>
      </div>
    </>
  )
}

export default App
