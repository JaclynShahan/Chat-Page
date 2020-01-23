import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Modal } from 'antd';

class Signup extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <div>
        <Modal
        onOk={this.addUser}
        okText="Save"
        title="Create an account"
        onCancel={() => this.props.setShowSignup(false)}
        visible={this.props.signup.showSignup}
        >
        <table>
            <tbody>
                
            </tbody>
        </table>

        </Modal>

    </div>
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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
