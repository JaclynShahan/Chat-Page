import React, { Component } from 'react'
import { socket } from '../../socket'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Badge, Input, Button } from 'antd'

class Chat extends Component {
  constructor () {
    super()
    this.state = {}
  }

//   componentDidMount () {
//     var elmnt = document.getElementById('content')
//     socket.on('msgs', data => {
//       console.log(data)
//       , () => elmnt.scrollIntoView()
//   })
//   }
  sendMessage = e => {
    if (e.preventDefault) {
      e.preventDefault()
    }
    socket.emit('send_message', {
      reply: this.props.login.reply,
      author: this.props.login.user.username
    })
  }
  distinct = () => {
    let duplicates = []
    this.props.login.messages.forEach(msg => {
      if (!duplicates.includes(msg.author)) {
        duplicates.push(msg.author)
      }
    })
    return duplicates
  }

  render () {
    return (
      <div>
        <Badge count={this.props.login.messages.length} showZero>
          <a href='#' />
        </Badge>
        <form onSubmit={this.sendMessage}>
          Messages:
          {this.props.login.messages.map((msg, i) => (
            <p key={i}>
              {msg.author}: {msg.reply}
            </p>
          ))}
        </form>
        <form>
          <Input
            onChange={e => this.props.setReply(e)}
            value={this.props.login.reply}
            placeholder='Reply...'
          />
          <Button
            onClick={e => this.sendMessage(e)}
            disabled={this.props.login.reply.length < 1}
          >
            Send
          </Button>
        </form>
        <form>
          People in Chat: <br />
          {this.distinct()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setReply (e) {
    dispatch({
      type: 'MESSAGE_REPLY',
      payload: e.target.value
    })
  },
  setMessages (data) {
      dispatch({
          type: 'USER_MESSAGES',
          payload: data
      })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
