import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/" > Home </Link></li>
            <li><Link to="/about" > About </Link></li>
            <li><Link to="/users" > Users </Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/users/:id"
          render={(routeProps) => <Users {...routeProps} greetingsMessage="Good Morning" />} 
        />
      </Router>
    );
  }
}

export default App;
