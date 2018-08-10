import React, { Component } from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component{
    constructor() {
        super()

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
        }
    render(){
        return (
            <div>
                Dashboard
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}
let mapStateToProps

export default connect(Dashboard)