import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
class AdventureEdit extends React.Component {
  state = { 
    name: '',
    description: '',
    photo:'',
    listitem: []
  }
  componentDidMount = () => {
    let config = {
      headers: {
      Authorization: `Bearer ${this.props.token}`
      }
    }
    axios.get(`/api/listitem/${this.props.match.params.id}`, config)
    .then(response => {
      this.setState({
        listitem: response.data
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`/api/listitem/${this.props.match.params.id}`, {
        name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
    }).then( response => {
    this.setState({
        description: '',
        photo: '',
        name: '',
        redirect: <Redirect to={`/profile/${this.props.match.params.id}`} />
        })
    })
}
  render() { 
    return ( 
      <>

      <h1>This is the AdventureEdit component</h1>
      <form onSubmit={this.handleSubmit}>
      Name: <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="Add to your bucketlist"/><br />
      Description: <input type="text" onChange={this.handleChange} name="description" value={this.state.description}/><br />
      <input type="hidden" onChange={this.handleChange} name="photo" value=""/> 
      <input type="submit" value="Submit"/>
      </form> 
      </>
    );
  }
}

export default AdventureEdit;