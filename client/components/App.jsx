import React, { useState } from 'react'
import Children from './Children'
import { Route, Link } from 'react-router-dom'
import childrenObj from '../../data/children'

import Add from './Add'
// import List from './List'
import Child from './Child'
// import Add from './Add'

const initial = [
  // { id: 1, name: 'Haircut', description: '' }
  { ...childrenObj }
]
function App () {
  const [wishList, setWishList] = useState(initial)
  return (
    <>
      <div>
        <div className='title'>
          <img src='/images/santa.gif' />
          <h1>Santa's Shopping List </h1>
        </div>

        <div className='main'>
          <h3>Home</h3>
          <h1 style={{ padding: '10px' }}><Link to='/children' exact>Children</Link></h1>
          <Route path='/children' component={Children}/>
          {/* <Route path='/children/:child' component={Child}/> */}

          <Route path='/children/:child'>
            <Child state={wishList} />
            {/* <List wishList={wishList} /> */}
            {/* <Link to='/children/:child/add'>
              Add Wish List
            </Link> */}
          </Route>
        </div>

        <div>
          <Route
            path='/children/:child/add'
            render={() => <Add wishList={wishList} setWishList={setWishList} />} />
        </div>

      </div>
    </>
  )
}

export default App
