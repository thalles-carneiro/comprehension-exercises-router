import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user: { username, password } } = this.props;
    if (username === "joao" && password === "1234") {
      return (<p>Welcome joao!</p>);
    }
    alert('Access denied');
    return (<Redirect to="/" />);
  }
}

export default StrictAccess;
