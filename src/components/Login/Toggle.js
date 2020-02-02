import React, { Component } from 'react'
import Login from './Login'
import SignIn from './SignIn'
import Signup from './Signup'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Toggle extends Component {
  constructor () {
    super()
    this.state = {
      viewingComponent: <SignIn />
    }
  }

  render () {
    return (
      <div>
        <Button
         className="loginTab"
          onClick={() => this.setState({ viewingComponent: <SignIn /> })}
        >
          LOGIN
        </Button>
        <Button
         className="signupTab"
          onClick={() => this.setState({ viewingComponent: <Signup /> })}
        >
          CREATE ACCOUNT
        </Button>
        {this.state.viewingComponent}
      </div>
    )
  }
}

export default Toggle
