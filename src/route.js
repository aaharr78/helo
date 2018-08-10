import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Post from './component/Post/Post'

class Routes extends Component {


    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Auth} exact />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/post/:id" component={Post} />
                    <Route path="/new" component={Form} />
                </Switch>
            </div>
        )
    }
}
export default Routes