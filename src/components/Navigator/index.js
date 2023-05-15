import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const Navigator = () => (
  <nav className="header-container">
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/bookslistview">
          Books List
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/addbook">
          Add Book
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigator
