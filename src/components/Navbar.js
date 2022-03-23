import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './Navbar.css'

const Navbar = () => {
  const [term, setTerm] = useState('')
  const history = useHistory()
  const { color } = useTheme()

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/search?q=${term}`)
    setTerm('')
  }

  return (
    <nav className="nav" style={{background: color}}>
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

        <NavLink 
          to="/create" 
          className="createBtn" 
          style={{ "&:hover": {color: color},}}
        >
          Create Recipe
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar