import React from "react"
import { NavLink } from "react-router-dom"

function Nav() {
    return(
        <nav>
        <a>Logo</a>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin">Interface</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/articles">Articles</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="styling">Styling</NavLink>
      </nav>
    )
}

export default Nav;