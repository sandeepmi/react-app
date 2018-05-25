import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { logout } from './helpers'
import 'bootstrap/dist/css/bootstrap.css'
import './less/main.css'
import { Header, Footer, Home, Login, Profile, ItemList } from './components'
import { PrivateRoute } from './components/core'

const App = () => (
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

export default App
