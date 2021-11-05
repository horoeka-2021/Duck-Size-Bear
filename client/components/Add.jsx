import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import childrenData from '../../data/children'

function Add({ setWishList, wishList }) {
  // const history = useHistory()
  const [form, setForm] = useState({
    name: '',
    description: ''
  })

  function handleAdd(event) {
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

    // set the state
    setWishList(newWishList)
    setForm({
      name: '',
      description: ''
    })

    // commenting out the following line fixed a routing bug!
    // history.push('/children/:child')
  }

  function handleForm(event) {
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
        Name
        <input name='name' value={form.name} onChange={handleForm} />
      </label>
      <label>
        Description
        <input name='description' value={form.description} onChange={handleForm} />
      </label>
      <button onClick={handleAdd}>Add</button>
    </form>);
}


export default Add