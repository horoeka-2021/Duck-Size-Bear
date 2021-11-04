import React, { useState } from 'react'
import Children from './Children'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Form from './Add'
import List from './List'
import Child from './Child'


const initial = [
  { id: 1, name: 'Haircut', description: '' },
]
function App () {

  const [wishList, setWishList] = useState(initial)
  return (
    <>
      <div className='title'>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <h3>Home</h3>
        <Route path='/children' component={Children}/>
        {/* <Route path='/children/:child' component={Child}/> */}


        <Route path='/children/:child'/>
            <List wishList={wishList} />
            <Link to='/children/:child/add'>
              Add Wish List
            </Link>
        </Route>

       <Route
            path='/children/:child/add'
            render={() => <Form wishList={wishList} setWishList={setWishList} />} />
          

        
      </div>
       
    </>
  )
}

export default App
