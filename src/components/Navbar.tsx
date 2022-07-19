import React from "react"
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
<nav>
<div className="nav-wrapper pink darken-4">
      <a href="/" className="brand-logo" >Welcome</a>
        <ul className='right hide-on-med-and-down'> 
        <li>
          <NavLink to="/">Список дел</NavLink>
          </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
</div>
</nav>
)