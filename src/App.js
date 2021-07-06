import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
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
            <li><Link to="/strict-access" > Strict Access </Link></li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/users/:id"
            render={(routeProps) => <Users {...routeProps} greetingsMessage="Good Morning" />} 
          />
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAccess user={ { username:'joao', password: '1234' } } />
            )} 
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
