import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from './component/Nav/Nav'
// import Auth from './component/Auth/Auth'
// import Dashboard from './component/Dashboard/Dashboard'
// import Form from './component/Form/Form'
// import Post from './component/Post/Post'
import Routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Auth />
        <Dashboard />
        <Form />
        <Post /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
