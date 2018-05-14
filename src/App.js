import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './less/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home'
import Login from './components/auth/Login'

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App
