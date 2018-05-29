import React, { Component } from 'react'
import { delay, cancelDelayedAction, getErrorMsg } from "../../helpers"
import { getUserProfile } from "../../services/userService"

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {},
      isLoading: false,
      message: ''
    }
  }

  async getProfile () {
    const loadingId = delay(() => { this.setState({ isLoading: true }) })

    try {
      const profile = await getUserProfile()
      this.setState({ profile })
    } catch (err) {
      this.setState({ message: getErrorMsg(err) })
    } finally {
      cancelDelayedAction(loadingId)
      this.setState({ isLoading: false })
    }
  }

  componentWillMount () {
    this.getProfile()
  }

  render() {
    const { profile } = this.state

    return (
      <div className="container">
        <h1 className="mt-3">Profile</h1>
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <p>Email: {profile.email}</p>
      </div>
    )
  }
}

export default Profile
