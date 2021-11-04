import React from 'react'

function List(props) {
  console.log(props.wishList);
  return (<ul>
    {props.wishList.map(item =>
      <li key={item.id}>
        {item.name}
        {item.description}
      </li>
    )}
  </ul>)
}

export default List