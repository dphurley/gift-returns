import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios/index'

class UserNewForm extends Component {

  state = {
    user: {},
    redirectToHome: false
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/users', this.state.user)

      this.setState({redirectToHome: true})
    } catch (error) {
      console.log('Error creating new user!')
      console.log(error)
    }
  }

  handleInputChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const user = {...this.state.user}
    user[attributeToChange] = newValue

    this.setState({user})
  }

  render () {
    return (
      <div>

        {this.state.redirectToHome ? <Redirect to="/" /> : null}

        <div className="stepper">
          <Link to="/">Home</Link> / New Profile
        </div>
        <div className="card">

          <h2>User Info</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required onChange={this.handleInputChange}/>
              </div>

              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={this.handleInputChange}/>
              </div>

              <div className="form-input">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" required onChange={this.handleInputChange}/>
              </div>

              <div className="form-input">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" required onChange={this.handleInputChange}/>
              </div>

              <div className="form-input">
                <label htmlFor="photoUrl">Photo Url</label>
                <input type="text" name="photoUrl" onChange={this.handleInputChange}/>
              </div>

              <div className="button-container flex-end">
                <input className="button primary" type="submit"
                       value="Create User" />
                  <Link to="/" className="button warning">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

UserNewForm.propTypes = {}
UserNewForm.defaultProps = {}

export default UserNewForm
