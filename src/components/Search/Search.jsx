import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import { FormStyle } from '.'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate("/searched/" + search)  // Tudo que pesquisar sera direcionado,.
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      
      <div>
        <FaSearch onClick={() => setSearch('')} />
        <input 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text" 
          placeholder='muffin' 
        />
      </div>

    </FormStyle>
  )
}

export default Search