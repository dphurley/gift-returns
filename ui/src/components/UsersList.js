import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserCard from './UserCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersList extends Component {

  state = {
    users: []
  }

  async componentDidMount () {
    const usersResponse = await axios.get('/api/users')

    this.setState({users: usersResponse.data})
  }

  render () {
    return (
      <div>

        <div className="stepper">
          Home
        </div>

        <div className="profile-card-container">

          <div className="user-cards">
            {
              this.state.users.map((user) => {
                return (
                  <UserCard {...user} key={user._id}/>
                )
              })
            }
          </div>

          <div className="button primary">
            <Link to="/users/new">
              New User
            </Link>
          </div>

        </div>
      </div>

    )
  }
}

UsersList.propTypes = {}
UsersList.defaultProps = {}

export default UsersList
