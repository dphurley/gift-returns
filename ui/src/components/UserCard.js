import React from 'react'
import PropTypes from 'prop-types'

const UserCard = (props) => {
  return (
    <div>
      <a href={`/user/${props._id}`} className="link user-card">
        <div className="user-image">

          {
            props.photoUrl ? 
              <img src={props.photoUrl}
                   alt={`${props.username}'s profile`} /> :
              <img src="https://picsum.photos/200/300"
                   alt={`${props.username}'s profile`} />
          }

        </div>
        <div className="profile-name">
          {props.firstName} {props.lastName}
        </div>
      </a>
    </div>
  )
}

UserCard.propTypes = {}
UserCard.defaultProps = {}

export default UserCard
