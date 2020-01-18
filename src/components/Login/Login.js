import React, { Component } from 'react'
import { Icon, Button } from 'antd'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      user: {}
    }
  }

  render () {
    return (
      <div>
        <form>
          <img />
          <div>
            <label>
              <Icon type='user' />
            </label>
            <input placeholder='Username' />
            <label>
              <Icon type='unlock' />
            </label>
            <input placeholder='Password' />
          </div>
          <div>
            <Button>Login</Button>
            <span>OR</span>
            <Button>Create Account</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
