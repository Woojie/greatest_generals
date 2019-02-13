import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import menu from '../images/nav/menu.svg'
import exit from '../images/nav/exit.svg'


export default class Navbar extends Component {
  state = {
    hidden: true
  }

  onClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  closeMenu = () => {
    this.setState({
      hidden: true
    })
  }

  render() {
    let hiddenToggler = this.state.hidden ? 'navbar-links hidden' : 'navbar-links'

    return (
      <div className="navbar">
        <div className="navbar-toggler">
          <img className="navbar-menu" src={menu} alt="hamburger menu" onClick={this.onClick} />
        </div>

        <Link to="/">
          <div className="navbar-brand">
            <h1 className="navbar-brand-title">World History Deliberation</h1>
          </div>
        </Link>

        <ul className={hiddenToggler}>
          <li className="navbar-links-exit">
            <img src={exit} alt="x" width="20px" onClick={this.closeMenu} />
          </li>

          <li className="navbar-links-item">
            <Link to="/" onClick={this.closeMenu}>
              The List
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/pod" onClick={this.closeMenu}>
              Generals
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/teampage" onClick={this.closeMenu}>
              Our Team
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}
