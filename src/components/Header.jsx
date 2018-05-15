import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { isMobile } from '../helpers'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMobileNavExpanded: false
    }
    this.toggleMobileNav = this.toggleMobileNav.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
  }

  toggleMobileNav () {
    this.setState(prevState => {
      return {
        isMobileNavExpanded: !prevState.isMobileNavExpanded
      }
    })
  }

  handleNavClick (e) {
    if (isMobile() && e.target.localName === 'a') {
      this.toggleMobileNav()
    }
  }

  render () {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <Link to='/' className="navbar-brand">
              <i className="material-icons dp48 large">account_balance</i>
            </Link>
            <button onClick={this.toggleMobileNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classNames('collapse', 'navbar-collapse', { show: this.state.isMobileNavExpanded })} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto" onClick={this.handleNavClick}>
                <li className="nav-item">
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/items' className="nav-link">Items</Link>
                </li>
                <li className="nav-item">
                  <Link to='/login' className="nav-link">Login</Link>
                </li>
                {/* <li className="nav-item dropdown nav-item-account" v-else>
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">account_circle</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-header py-0">{{displayName}}</a>
                    <div className="dropdown-divider d-none d-md-block"></div>
                    <Link to="{ name: 'MyAccount' }" className="dropdown-item">My Account</Link>
                    <Link to="{ name: 'Logout' }" className="dropdown-item">Logout</Link>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
