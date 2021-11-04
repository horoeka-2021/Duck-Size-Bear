import React, { useState } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import Form from './Add'
import List from './List'


import Nav from './Nav'
import Home from './Home'


const initial = [
  { id: 1, name: 'Haircut', description: '' },
]
function App () {

  const [wishList, setWishList] = useState(initial)
  return (
    <>
      <div className='title'>
        <img src='/images/color_earth.gif' />
        <h1>Navigating the worldwide routes</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
      {/* <Route path='/children/:child/add' component={Add} /> */}

     {/* Seshan Working */}

     <Route path='/children/:child' >
        <List wishList={wishList} />
        <Link to='/children/:child/add'>
          Add Wish List
        </Link>
      </Route>
      <Route
        path='/children/:child/add'
        render={() => <Form wishList={wishList} setWishList={setWishList} />} />


     {/* Seshan Working */}
      </div>
    </>
  )
}

export default App
