import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='nav'>
      <Link to='/children'><h2>See Shopping List</h2></Link>
    </div>
  )
}