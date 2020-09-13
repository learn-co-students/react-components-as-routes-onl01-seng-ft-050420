import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';




const Messages = () => {
  return (
    <div>
      <input type="text" placeholder="Type your messages here"></input>
    </div>
  )
}

const Signup = () => {
  return (
    <div>
      <form>
        <div>
        <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label> 
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}



// core routing will live in this document
//basically you should add your routes into the index.js file in the ReactDOM.render()
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
    <Route path="/" component={Home}/>
    {/* alternatively//<Route path="/" render={() => <h1>Home!</h1>} /> */}
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  //  <Home />,
  document.getElementById('root')
);
