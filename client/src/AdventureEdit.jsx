import React from 'react';
import axios from 'axios';
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
      console.log(response.data)
      this.setState({
        listitem: response.data,
        name:  response.data.name,
        description: response.data.description,
        photo: response.data.description
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
    let config = {
      headers: {
      Authorization: `Bearer ${this.props.token}`
      }
    }
    axios.put(`/api/listitem/${this.props.match.params.id}`, config, {
        _id:this.props.match.params.id,
        name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
    }).then( response => {
    this.setState({
        description: '',
        photo: '',
        name: '',
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