import React, { Component } from 'react'
import { connect } from 'react-redux'

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            user: null,
            password: null,
        }
    }

    

    render() {
        return (
            <div>
                {this.props.user}

                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
    let mapStateToProps = state => {
        return {
            user: state.user.data
        }
    }
    export default connect(mapStateToProps)(Auth)