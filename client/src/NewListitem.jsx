import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewListitem extends React.Component {
state = { 
    name: '',
    description: '',
    photo: '',
    categories: [],
    selectedCategory: '',
    redirect: ''
}
componentDidMount = () => {
    let config = {
        headers: {
        Authorization: `Bearer ${this.props.token}`
        }
}
Axios.get('/api/categories', config)
    .then(response => {

        this.setState({
        categories: response.data
        })
    })
}

handleChange = (e) => {
    this.setState({ 
        [e.target.name]: e.target.value
    });
}
handleToggleChange = (e) => {
    this.setState({
        selectedCategory: e.target.value,
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    let config = {
        headers: {
            Authorization: `Bearer ${this.props.token}`
        }
    }
    Axios.post('/api/categories',{
        name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
        catId: this.state.selectedCategory 
    }, config).then( response => {
        this.setState({
            categories: this.state.categories,
            description: this.state.description,
            photo: this.state.photo,
            name: this.state.name,
            selectedCategory: this.state.selectedCategory,
            redirect: <Redirect to={`/profile`} />
        })
    })
}

render() { 

    const mappedCategories = this.state.categories.map( (category,id) => <option key={id} value={category._id}>{category.name}</option>)
    return ( 
        <>
        <h1>Create Your Adventure Below </h1>
        <form onSubmit={this.handleSubmit}>
        Add Item To Your List <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="Add to your bucketlist"/> <br />
        <input type="hidden" onChange={this.handleChange} name="description" value=""/>
        <input type="hidden" onChange={this.handleChange} name="photo" value=""/>
        <select name="category" onChange={this.handleToggleChange}>
        {mappedCategories}
        </select> <br />
        <input type="submit" value="Submit"/>
        </form> 
        {this.state.redirect}
        </>
    );
    }
}

export default NewListitem;