import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

class UserProfile extends Component {

  state = {
    user: {},
    redirectToHome: false
  }

  async componentDidMount() {
    const userResponse = await axios.get(`/api/users/${this.props.match.params.userId}`)

    this.setState({user: userResponse.data})
  }

  deleteUser = async () => {
    const userId = this.props.match.params.userId

    try {
      if(window.confirm('Are you sure?')) {
        await axios.delete(`/api/users/${userId}`)

        this.setState({redirectToHome: true})
      }

    } catch(error) {
      console.log(`Error deleting User with ID ${userId}`)
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        {this.state.redirectToHome ? <Redirect to="/" /> : null}

        <div className="stepper">
          <Link to="/">Home</Link> / Profile
        </div>

        <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
        <div className="user-container">
          <div>
            {
              this.state.user.photoUrl ?
                <img src={this.state.user.photoUrl}
                     alt={`${this.state.user.username}'s profile`} /> :
                <img src="https://picsum.photos/200/300"
                     alt={`${this.state.user.username}'s profile`} />
            }
          </div>

          <div className="user-info">
            <div className="button-container">
              <div className="button primary">
                <a href="/users/{this.state.user._id}/edit">Update INFO</a>
              </div>
              <div className="button warning">
                <a onClick={this.deleteUser}>Delete ME</a>
              </div>
            </div>
            <div>Username:
              <strong>{this.state.user.username}</strong>
            </div>
            <div>Email:
              <strong>{this.state.user.email}</strong>
            </div>
            <div className="visit-store">
              <Link to={`/users/${this.state.user._id}/stores`}>Stores To Visit</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

UserProfile.propTypes = {}
UserProfile.defaultProps = {}

export default UserProfile
