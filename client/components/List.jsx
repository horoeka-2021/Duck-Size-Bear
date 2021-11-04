import React from 'react'

function List (props) {
  console.log(props.wishList)
  return (
    <div>
      <ul>
        {props.wishList.map(item =>
          <li key={item.id}>
            {item.name}
            {item.description}
          </li>
        )}
      </ul>
    </div>
  )
}

export default List
