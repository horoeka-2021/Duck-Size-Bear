import React from 'react'
import { useParams } from 'react-router-dom'
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
      </div>
    </>
  )
}

export default Child
