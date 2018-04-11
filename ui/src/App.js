import React, { Component } from 'react'
import UsersList from './components/UsersList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import UserNewForm from './components/UserNewForm'
import axios from 'axios'

class App extends Component {

  render () {
    return (
      <div>
        <div className="global-nav">
          <div className="animated fadeIn">
            <a className='app-name' href="/">
              <img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Present-icon.png"
                alt="Back to home" />ReGifter
            </a>
          </div>

        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={UsersList}/>
            <Route exact path="/user/:userId" component={UserProfile}/>
            <Route exact path="/users/new" component={UserNewForm}/>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App