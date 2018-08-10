import React from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props){
    return(
        <div>
            <Link to={'/Dashboard'}>Home</Link>
            <Link to={'/Post'}>New Post</Link>
            <Link to={'/Auth'}>Logout</Link>
        </div>
    )
}
// let mapStateToProps = state => {
//     return {
//       userName: state.userName.data,
//       email: state.email.data
//     }
//   }

export default connect( withRouter)(Nav)