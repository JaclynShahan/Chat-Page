import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Modal, Button, Input } from 'antd'

class Signup extends Component {
  constructor () {
    super()
    this.state = {}
  }

  addUser = e => {
    Axios.post(`/api/addUser`, {
      firstName: this.props.signup.firstName,
      lastName: this.props.signup.lastName,
      email: this.props.signup.email,
      createUsername: this.props.signup.createUsername,
      createPassword: this.props.signup.createPassword,
      image: this.props.signup.image
    }).then(resp => {
      e.preventDefault()
      this.props.setShowSignup(false)
      this.props.setUserList(resp.data)
      console.log('Response:', resp)
    })
  }

  render () {
    // console.log(this.props.signup.setShowSignup)
    return (
      <div>
        <span className="spans">First Name:</span>

        <Input
        className="signupInput"
          onChange={e => this.props.setFirstName(e)}
          value={this.props.signup.firstName}
        />

        <span className="spans">Last Name:</span>

        <Input
        className="signupInput"
          onChange={e => this.props.setLastName(e)}
          value={this.props.signup.lastName}
        />

        <span className="spans">Email:</span>

        <Input
        className="signupInput"
          onChange={e => this.props.setEmail(e)}
          value={this.props.signup.email}
        />

        <span className="spans">Create Username:</span>

        <Input
        className="signupInput"
          onChange={e => this.props.setCreateUsername(e)}
          value={this.props.signup.createUsername}
        />

        <span className="spans">Create Password:</span>

        <Input
        className="signupInput"
          onChange={e => this.props.setCreatePassword(e)}
          value={this.props.signup.createPassword}
        />

        <span className="spans">Image Url:</span>

        <Input
        className="signupInput"
          onChange={e => this.props.setImage(e)}
          value={this.props.signup.image}
        />

        <Button className='inputStyle' onClick={this.addUser}>
          Create Account
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setFirstName (e) {
    dispatch({
      type: 'SET_FIRSTNAME',
      payload: e.target.value
    })
  },
  setLastName (e) {
    dispatch({
      type: 'SET_LASTNAME',
      payload: e.target.value
    })
  },
  setEmail (e) {
    dispatch({
      type: 'SET_EMAIL',
      payload: e.target.value
    })
  },
  setCreateUsername (e) {
    dispatch({
      type: 'SET_CREATE_USERNAME',
      payload: e.target.value
    })
  },
  setCreatePassword (e) {
    dispatch({
      type: 'SET_CREATE_PASSWORD',
      payload: e.target.value
    })
  },
  setRedirect () {
    dispatch({
      type: 'SET_REDIRECT',
      payload: ''
    })
  },
  setShowSignup (val) {
    dispatch({
      type: 'SHOW_SIGNUP',
      payload: val
    })
  },
  setUserList (arr) {
    dispatch({
      type: 'SET_USER_LIST',
      payload: arr
    })
  },
  setImage (e) {
    dispatch({
      type: 'SET_IMAGE',
      payload: e.target.value
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
