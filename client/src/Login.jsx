import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = { 
    email: '',
    password: '',
    message: '',
    redirect: null
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/auth/login', {email: this.state.email, password: this.state.password})
    .then(res => {
      if (res.data.type === 'error') {
        console.log(`Error: ${res.data.message}`);
      } else {
        localStorage.setItem('mernToken', res.data.token);
        this.props.liftToken(res.data);
        this.setState({ redirect: <Redirect to={'/homepage'} /> });
      }
    }).catch(err => console.log(err)); // Rate limiter catch block
  }

  render() {
    var output;
    if (this.state.redirect) {
      output = this.state.redirect;
    } else {
      output = (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
          <input type="submit" value="Login"/>
        </form>
      )
    }
    return ( 
      <div className="App">
        <h2>Log In Here:</h2>
        {output}
      </div>
    );
  }
}

export default Login;
