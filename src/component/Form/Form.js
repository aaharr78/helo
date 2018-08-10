import React, { Component } from 'react'
import {connect} from 'react-redux'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    render() {
        return (
            <div>
                Form
            </div>
        )
    }
}
export default connect(Form)