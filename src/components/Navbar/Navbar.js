import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import menu from '../../images/nav/menu.svg'
import exit from '../../images/nav/exit.svg'

/**
 * Navabar:
 * @state hide or show the mobile menu button
 * @function closeMenu Closes the mobile menu button. Used when clicking on a menu item
 * @var hiddenToggler conditional class that toggles the web and mobile navbar
 */

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
      <div className="navbar" data-test="navbar-component">
        <div className="navbar-toggler">
          <img data-test="navbar-mobile-menu-button" className="navbar-menu" src={menu} alt="hamburger menu" onClick={this.onClick} />
        </div>

        <Link to="/">
          <div className="navbar-brand">
            <h1 className="navbar-brand-title">History Deliberation</h1>
          </div>
        </Link>

        <ul className={hiddenToggler} data-test={this.state.hidden ? 'web' : 'mobile'}>

          <li className="navbar-links-exit">
            <img src={exit} alt="x" width="20px" onClick={this.closeMenu} />
          </li>

          <li className="navbar-links-item">
            <Link to="/theList" onClick={this.closeMenu}>
              The List
            </Link>
          </li>

          <li className="navbar-links-item">
            <Link to="/generals" onClick={this.closeMenu}>
              Generals
            </Link>
          </li>

          <li className="navbar-links-item">
            <Link to="/teampage" onClick={this.closeMenu}>
              Make Your Own List
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
