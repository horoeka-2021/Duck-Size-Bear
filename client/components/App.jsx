import React from 'react'
import Children from './Children'
import { Route } from 'react-router-dom'

import Child from './Child'

function App () {
  return (
    <>
      <div className='title'>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <h3>Home</h3>
        <Route path='/children' component={Children}/>
        <Route path='/children/:child' component={Child}/>
      </div>
    </>
  )
}

export default App
