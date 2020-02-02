import React, { Component } from 'react'
import { Icon, Button, Input } from 'antd'
import { connect } from 'react-redux'
import Axios from 'axios'
import Signup from './Signup'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      user: {}
    }
  }

  authUser = () => {
    Axios.get(
      `/api/authUser?username=${this.props.login.user.username}&password=${
        this.props.login.user.password
      }`
    ).then(resp => {
      console.log('Working')
      if (this.props.verifyUser(resp.data)) {
        console.log(resp.data)
        this.props.setAuthentication(resp.data)
      } else {
        alert('Username or Password is incorrect. Please try again.')
      }
    })
  }
  render () {
    console.log(this.props.login.user)
    return (
      <div className='loginBackground'>
       

        <div>
          <div className='loginStyle'>
            <img
              className='inputImage'
              src='https://cahtc.com/wp-content/uploads/2016/11/user-icon.png'
            />
            <Input
              className='inputStyle'
              type='text'
              placeholder='Username'
              onChange={e => this.props.setUsername(e)}
            />

            <Input
              className='inputStyle'
              type='password'
              onChange={e => this.props.setPassword(e)}
              placeholder='Password'
            />

            <Button
              className='inputStyle'
              onClick={() => this.authUser()}
              type='submit'
            >
              Login
            </Button>
            <span>OR</span>
            <Signup />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setUsername (e) {
    dispatch({
      type: 'SET_USERNAME',
      payload: e.target.value
    })
  },
  setPassword (e) {
    dispatch({
      type: 'SET_PASSWORD',
      payload: e.target.value
    })
  },
  setAuthentication (val) {
    dispatch({
      type: 'USER_AUTH',
      payload: val
    })
  },
  verifyUser (user) {
    dispatch({
      type: 'VERIFY_USER',
      payload: user
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
