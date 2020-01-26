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
    //console.log(this.props.signup.setShowSignup)
    return (
      <div>
        <Button onClick={() => this.props.setShowSignup(true)}>
          Create Account
        </Button>
        <Modal
          onOk={this.addUser}
          okText='Save'
          title='Create an account'
          onCancel={() => this.props.setShowSignup(false)}
          visible={this.props.signup.showSignup}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <span>First Name:</span>
                </td>
                <td>
                  <Input
                    onChange={e => this.props.setFirstName(e)}
                    value={this.props.signup.firstName}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Last Name:</span>
                </td>
                <td>
                  <Input
                    onChange={e => this.props.setLastName(e)}
                    value={this.props.signup.lastName}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Email:</span>
                </td>
                <td>
                  <Input
                    onChange={e => this.props.setEmail(e)}
                    value={this.props.signup.email}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Create Username:</span>
                </td>
                <td>
                  <Input
                    onChange={e => this.props.setCreateUsername(e)}
                    value={this.props.signup.createUsername}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Create Password:</span>
                </td>
                <td>
                  <Input
                    onChange={e => this.props.setCreatePassword(e)}
                    value={this.props.signup.createPassword}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Image Url:</span>
                </td>
                <td>
                  <Input
                    onChange={e => this.props.setImage(e)}
                    value={this.props.signup.image}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Button>Save</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
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
