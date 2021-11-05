import React from 'react'
import childrenObj from '../../data/children'

function List (props) {
  console.log("childrenObj child: ", childrenObj[props.child].wishlist)

  return (
    <div>
      <ul>
        {childrenObj[props.child].wishlist.map(item =>
          <li key={item.giftname}>
            <span>Gift: {item.giftname}</span>
            <ul>
              <li>Online Store URL: {item.gifturl}</li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}

export default List
