import React, {Component} from 'react'
import Login from './Login'
import Signup from './Signup'
import Toggle from './Toggle'
import {Button, Input} from 'antd'

class SignIn extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        return(
            <div>
            <div className="loginStyle">
            <img
              className='inputImage'
              src='https://cahtc.com/wp-content/uploads/2016/11/user-icon.png'
            />
           <br></br>
            <span className="spans">Username:</span>
            <Input
              className='inputStyle'
              type='text'
              placeholder="Enter Username..."
              onChange={e => this.props.setUsername(e)}
            />
            <br></br>
            <spans className="spans">Password:</spans>
            <Input
              className='inputStyle'
              type='password'
              onChange={e => this.props.setPassword(e)}
              placeholder='Enter Password...'
            />
            <br></br>
            {/* {this.props.login.user.username ? <Redirect to='/home'/> : ''} */}
            <Button
              className='inputStyle'
              onClick={() => this.authUser()}
              type='submit'
            >
              Login
            </Button>
          </div>
          </div>
        )
    }
}

export default SignIn;