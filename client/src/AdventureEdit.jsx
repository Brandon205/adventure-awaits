import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import {Button,  Icon, Textarea} from 'react-materialize';
import './css/AdventureEdit.css';
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
    let config = {
      headers: {
      Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.get(`/api/listitem/${this.props.match.params.id}`, config)
    .then(response => {
      this.setState({
        listitem: response.data,
        name:  response.data.name,
        description: response.data.description,
        photo: response.data.photo,
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

      <div className="adventure-background">
        <div className="title">
          <h3 className="input-title">Edit Your Adventure</h3>
          <form className="form-id" onSubmit={this.handleSubmit}>
          <p className="input" >Adventure: </p><input className="input" type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder={this.state.name}/><br />
          <p className="input">Description of the Completed Adventure:</p> <Textarea onChange={this.handleChange} name="description" value={this.state.description} placeholder="How did it go?" />
          <input type="hidden" onChange={this.handleChange} name="photo" value=""/> 
          <Button className="btn-input" type="submit" waves="light">
              Submit
              <Icon right>
              send
              </Icon>
            </Button>
          </form> 
          {this.state.redirect}
        </div>

      </div>

      
    );
  }
}

export default AdventureEdit;