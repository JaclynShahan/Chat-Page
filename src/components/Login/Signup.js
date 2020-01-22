import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

class Signup extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <div />
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
      type: 'SET_SHOW_SIGNUP',
      payload: val
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
