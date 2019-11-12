import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

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
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" /><br/>
          Email: <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" /><br/>
          Password: <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" /> <br />
          <input type="submit" value="Sign Up"/>
        </form>
      )
    }
    return ( 
      <div className="App">
        <h2>Sign Up Here! </h2>
        {output}
      </div>
    );
  }
}

export default Signup;