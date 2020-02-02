import React, {Component} from 'react'
import {connect} from 'react-redux'
//import Chat from './Chat'

import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
    
        return(
            
        <div className="profileContainer">
        <div className="sideBar">Left Side
        <img />
        <span>Friend List:</span>
        <button>Edit Friends</button>
        </div>
        <div>
            <button>Edit Profile</button>
            <button>Add Friend</button>
            <button>Logout</button>
            <button>Send Message</button>
        </div>
            
        </div>

            
        )
    }
}

export default Home;