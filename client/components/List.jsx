import React from 'react'
import childrenObj from '../../data/children'

function List (props) {
  console.log(props.wishList)
  console.log("Wish List: ", childrenObj[props.child].wishList)
  
  console.log("Log Child", props.child)

    console.log("Wish List Child Object: ", props.wishList[0][props.child])
  return (
    <div>
      <ul>
        {props.wishList[0][props.child].wishList.map(item =>
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
