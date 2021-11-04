import React from 'react'
import { useParams, Link } from 'react-router-dom'
import childrenObj from '../../data/children'

function Child (props) {
  const { child } = useParams()

  const { image, wishlist } = childrenObj[child]

  console.log(wishlist)

  return (
    <>
      <div>
        <h1>{ child }</h1>
        <p><img src={`./images/${image}`} /></p>
        <Link to={`/children/${child}/add`}>
          Add Wish List
        </Link>
      </div>
    </>
  )
}

export default Child
