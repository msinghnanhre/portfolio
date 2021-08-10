import React, { Component } from 'react'
import axios from "axios";

export default class AuthDemo extends Component {
    state = {
        isLoggedIn: false,
        profileData: null
    }

    componentDidMount() {
        //POST login
        //GET profile
        //Get seret Page
        //run your axios here
    }

    render() {
        return (
            <div>
                {/* If not logged in show login from
                 if logged in show profile information */}
                {this.state.isLoggedIn}
            </div>
        )
    }
}
