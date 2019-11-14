import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, TextInput } from 'react-materialize';
import './css/Login.css';

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
        this.setState({ redirect: <Redirect to={'/'} /> });
      }
    }).catch(err => console.log(err)); // Rate limiter catch block
  }

  render() {
    var output;
    if (this.state.redirect) {
      output = this.state.redirect;
    } else {
      output = (
        <div className="content-background">
          <TextInput label="Email" type="text" name="email" onChange={this.handleChange} value={this.state.email} /> <br />
          <TextInput label="Password" type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br />
          <Button type="submit" waves="light" onClick={this.handleSubmit}>Log In</Button>
        </div>
      )
    }
    return ( 
      <div className="App">
        <h2>Welcome Back</h2>
        {output}
      </div>
    );
  }
}

export default Login;
