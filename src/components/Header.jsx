import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
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

  AccountNav ({ userName }) {
    return (
      <li className="nav-item dropdown nav-item-account">
        <Link to='#' className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="material-icons">account_circle</i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-header py-0">{userName}</a>
          <span className="dropdown-divider d-none d-md-block"></span>
          <NavLink to='/account' className="dropdown-item">My Account</NavLink>
          <NavLink to='/logout' className="dropdown-item">Logout</NavLink>
        </div>
      </li>
    )
  }

  render () {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <NavLink to='/' exact className="navbar-brand">
              <i className="material-icons dp48 large">account_balance</i>
            </NavLink>
            <button onClick={this.toggleMobileNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classNames('collapse', 'navbar-collapse', { show: this.state.isMobileNavExpanded })} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto" onClick={this.handleNavClick}>
                <li className="nav-item">
                  <NavLink to='/' className="nav-link" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/items' className="nav-link">Items</NavLink>
                </li>
                {!this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink to='/login' className="nav-link">Login</NavLink>
                  </li>
                ) : (
                  <this.AccountNav userName={this.props.userName} />
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.user.name,
  isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Header)
