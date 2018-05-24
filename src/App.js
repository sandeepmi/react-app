import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './less/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home'
import Login from './components/auth/Login'
import Profile from './components/account/Profile'
import ItemList from './components/items/ItemList'
import { PrivateRoute } from './components/core'

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/items' component={ItemList} exact />
        <PrivateRoute path="/account" component={Profile} />
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App
