import React from 'react'
import { Link } from 'react-router-dom'
import childrenObj from '../../data/children'

const childrenArr = Object.keys(childrenObj)

const Children = () => {
  return (
    <div>
      <h3>Children</h3>
      <ul>
        {childrenArr.map(child => (
          <li key={child}><Link to={`/children/${child}`}>{child}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Children
