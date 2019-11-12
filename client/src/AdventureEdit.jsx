import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
class AdventureEdit extends React.Component {
  state = { 
    name: '',
    description: '',
    photo:'',
    listitem: [],
    category: null,
    redirect: ''
  }
  componentDidMount = () => {
    console.log(this.props.token)
    let config = {
      headers: {
      Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.get(`/api/listitem/${this.props.match.params.id}`, config)
    .then(response => {
      console.log(response.data)
      this.setState({
        listitem: response.data,
        name:  response.data.name,
        description: response.data.description,
        photo: response.data.description,
        category: response.data.categories[0]
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
    Axios.put(`/api/listitem/${this.props.match.params.id}`, {
        _id: this.props.match.params.id,
        name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
        catId: this.state.category
    }, config).then( response => {
    this.setState({
        description: '',
        photo: '',
        name: '',
        redirect: <Redirect to={`/profile/${this.props.match.params.cName}`} />
        })
    })
}
  render() { 
    return ( 
      <>
      <h3>Edit Your Adventure</h3>
      <form onSubmit={this.handleSubmit}>
      Adventure: <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder={this.state.name}/><br />
      Description of the Completed Adventure: <input type="text" onChange={this.handleChange} name="description" value={this.state.description} placeholder="How did it go?"/><br />
      <input type="hidden" onChange={this.handleChange} name="photo" value=""/> 
      <input type="submit" value="Submit"/>
      </form> 
      {this.state.redirect}
      </>
    );
  }
}

export default AdventureEdit;