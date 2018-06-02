import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './helpers'
import 'bootstrap/dist/css/bootstrap.css'
import './less/main.css'
import { Header, Footer, Home, Login, Profile, ItemList } from './components'
import { PrivateRoute } from './components/core'
import { getUserInfo } from './actions'

class App extends Component {
  componentWillMount () {
    this.props.onAppLoad()
  }

  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/logout' render={logout} exact />
            <Route path='/items' component={ItemList} exact />
            <PrivateRoute path="/account" component={Profile} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

const mapActionsToProps = {
  onAppLoad: getUserInfo
}

export default withRouter(connect(null, mapActionsToProps)(App))
