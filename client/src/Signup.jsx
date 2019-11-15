import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { TextInput, Button } from 'react-materialize';
import './css/Login.css';

class Signup extends React.Component {
  state = { 
    name: '',
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
    Axios.post('/auth/signup', {name: this.state.name, email: this.state.email, password: this.state.password})
    .then(res => {
      if (res.data.type === 'error') {
        // TODO: Maybe put this message in state
        console.log(`Error: ${res.data.message}`);
      } else {
        localStorage.setItem('mernToken', res.data.token)
        this.props.liftToken(res.data)
        this.setState({ redirect: <Redirect to={'/'} /> });
      }
    }).catch(err => console.log(err));
  }

  render() { 
    let output;
    if (this.state.redirect) {
      output = this.state.redirect
    } else {
      output = (
        <div className="content">
          <TextInput label="Name" type="text" name="name" onChange={this.handleChange} value={this.state.name} /><br/>
          <TextInput label="Email" type="text" name="email" onChange={this.handleChange} value={this.state.email} /><br/>
          <TextInput label="Password" type="password" name="password" onChange={this.handleChange} value={this.state.password} /> <br />
          <Button type="submit" waves="light" onClick={this.handleSubmit}>Sign Up</Button>
        </div>
      )
    }

    return ( 
      <div className="App">
        <h2>Sign Up</h2>
        {output}
      </div>
    );
  }
}

export default Signup;
