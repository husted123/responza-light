import React from "react"
import { NavLink } from "react-router-dom"
import logo from "./img/logo.png"

function Nav() {
    return(
        <nav>
        <a><img alt="logo" src={logo}></img></a>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin">Interface</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/articles">Articles</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/categories-list">Categories</NavLink>
      </nav>
    )
}

export default Nav;