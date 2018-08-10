import React, { Component } from 'react'
import {connect} from 'react-redux'

class Post extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }


    render() {
        return (
            <div>
                Post
            </div>
        )
    }
}
    let mapStateToProps = (state, props) => {
        let { id } = props.match.params
        console.log(111111111, id)
        let post = state.posts.data.find(post => Number(post.id) === Number(id))
        return { post }
    }



export default connect(mapStateToProps)(Post)