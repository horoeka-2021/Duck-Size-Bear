import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router'

import childrenData from '../../data/children'

function Add ({ setWishList, wishList }) {
  // console.log('wishLilst: ', wishList)

  const history = useHistory()
  const [form, setForm] = useState({
    giftname: '',
    gifturl: ''
  })

  // find out what child we want to add to
  const { child } = useParams()
  // console.log(child)

  function handleAdd (event) {
    event.preventDefault()

    // get the highest id in the array
    const maxId = Math.max(...wishList.map(wishList => wishList.id))
    // add the id property to the form
    const newForm = {
      ...form,
      id: maxId + 1
    }

    // add a new element the existing array
    const newWishList = [...wishList, newForm]

    // find specific child, then add newForm into their wishlist array
    const childsNewWishlist = [...wishList[0][child].wishlist, newForm]
    // const newWishList = [...wishList[0][child].wishlist, newForm]
    wishList[0][child].wishlist = childsNewWishlist

    // set the state (reset the form)
    setWishList(wishList)
    setForm({
      giftname: '',
      gifturl: ''
    })

    // commenting out the following line fixed a routing bug!
    history.push(`/children/${child}`)
  }

  function handleForm (event) {
    const value = event.target.value
    const name = event.target.name

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <form>
      <label>
        Gift
        <input name='giftname' value={form.giftname} onChange={handleForm} />
      </label>
      <label>
        Online Store URL
        <input name='gifturl' value={form.gifturl} onChange={handleForm} />
      </label>
      <button onClick={handleAdd}>Add</button>
    </form>)
}

export default Add
