import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/search?q=${term}`)
    setTerm('')
  }

  return (
    <nav className="nav">
      <div className="navlinks">
        <NavLink to="/" className="logo">
          Cooking Ninja 
        </NavLink>

        <form onSubmit={handleSearch}>
          <label>
            <span>Search:</span>
            <input
              type="text"
              value={term} 
              onChange={e => setTerm(e.target.value)}
            />
          </label>
        </form>

        <NavLink to="/create" className="createBtn">
          Create Recipe
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar