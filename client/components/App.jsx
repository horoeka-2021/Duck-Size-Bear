import React, { useState } from 'react'
import Children from './Children'
import { Route, Link } from 'react-router-dom'
import childrenObj from '../../data/children'

import Add from './Add'
// import List from './List'
import Child from './Child'
// import Add from './Add'
import Nav from './Nav'

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
          <img className="homePageGif" src='/images/santaTrans.gif' />
          <h1>Santa&apos;s Shopping List </h1>
        </div>

        <Route path='/' exact component={Nav} />

        <div className='main'>
          <div className='styleDiv'>
            <Route path='/children' component={Children}/>
            {/* <Route path='/children/:child' component={Child}/> */}

            <div className='child'>
              <Route path='/children/:child'>
                <Child state={wishList} />
                {/* <List wishList={wishList} /> */}
                {/* <Link to='/children/:child/add'>
                  Add Wish List
                </Link> */}
              </Route>
              <div className="randomDiv">

                <div className='form'>
                  <Route
                    path='/children/:child/add'
                    render={() => <Add wishList={wishList} setWishList={setWishList} />} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
