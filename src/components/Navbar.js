import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navlinks">
        <NavLink to="/" className="logo">
          Cooking Ninja 
        </NavLink>
        <NavLink to="/create" className="createBtn">
          Create
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar