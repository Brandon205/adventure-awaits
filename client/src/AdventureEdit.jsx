import React from 'react';
import axios from 'axios';
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
    axios.get(`/api/listitem/${this.props.match.params.id}`,config)
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
    console.log('working')
    let config = {
      headers: {
      Authorization: `Bearer ${this.props.token}`
      }
    }
    axios.put(`/api/listitem/${this.props.match.params.id}`,{
        _id:this.props.match.params.id,
        name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
        catId: this.state.category
    },config).then( response => {
    this.setState({
        description: '',
        photo: '',
        name: '',
        redirect: <Redirect to={`/profile/${this.props.match.params.cName}/adventure`} />
        })
    })
}
  render() { 
    return ( 
      <>

      <h1>This is the AdventureEdit component</h1>
      <form onSubmit={this.handleSubmit}>
      Name: <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder={this.state.name}/><br />
      Description: <input type="text" onChange={this.handleChange} name="description" value={this.state.description}/><br />
      <input type="hidden" onChange={this.handleChange} name="photo" value={this.state.photo}/> 
      <input type="submit" value="Submit"/>
      </form> 
      {this.state.redirect}
      </>
    );
  }
}

export default AdventureEdit;