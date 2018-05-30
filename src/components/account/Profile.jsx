import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { delay, cancelDelayedAction, getErrorMsg } from "../../helpers"
import { getUserProfile } from "../../services/userService"
import { Loading, Alert } from "../core"

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: null,
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

  ProfileInfo ({ profile }) {
    return (
      <div>
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <p>Email: {profile.email}</p>
      </div>
    )
  }

  render() {
    const { profile, isLoading, message } = this.state

    return (
      <div className="container">
        <h1 className="mt-3">Profile</h1>

        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={250} transitionLeaveTimeout={0}>
          {isLoading ? (
            <Loading type="card" key="loading" />
          ) : profile ? (
            <this.ProfileInfo profile={profile} />
          ) : (
            <Alert key="alert">{message}</Alert>
          )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Profile
