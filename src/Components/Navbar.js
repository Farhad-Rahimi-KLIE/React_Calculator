import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-2">
  <a className="navbar-brand" href="/">{props.title}</a>
  <ul className="navbar-nav">
    <li className="nav-item1">
      <a className="nav-link" href="/">{props.Home}</a>
    </li>
    <li className="nav-item2">
      <a className="nav-link" href="about.js">{props.about}</a>
    </li>
    <li className="nav-item3">
      <a className="nav-link" href="/">{props.services}</a>
    </li>
    <li className="nav-item4">
      <a className="nav-link" href="/">{props.skills}</a>
    </li>
    <li className="nav-item5">
      <a className="nav-link" href="/">{props.contact}</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar
