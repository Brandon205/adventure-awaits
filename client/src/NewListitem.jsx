import React from 'react';
import axios from 'axios';

class NewListitem extends React.Component {
state = { 
    name: '',
    description: '',
    photo: '',
    categories: [],
    selectedCategory: ''
}
componentDidMount = () => {
    console.log(this.props.token)
    let config = {
        headers: {
        Authorization: `Bearer ${this.props.token}`
        }
}
axios.get('/api/categories', config)
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
    console.log('working')
    let config = {
        headers: {
            Authorization: `Bearer ${this.props.token}`
        }
    }
    axios.post('/api/categories',{
        name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
        catId: this.state.selectedCategory,
        
    },config).then( response => {
        this.setState({
            categories: this.state.categories,
            description: '',
            photo: '',
            name: '',
            selectedCategory: ''
        })
    })
    console.log(`😊`,this.state.categories)
    console.log(`🦄`,this.state.name)
}
render() { 

    const mappedCategories = this.state.categories.map( (category,id) => <option key={id} value={category._id}>{category.name}</option>)
    return ( 
        <>
        <h1>This is the NewListitem component</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="Add to your bucketlist"/>
        <input type="hidden" onChange={this.handleChange} name="description" value=""/>
        <input type="hidden" onChange={this.handleChange} name="photo" value=""/> 
        
        <select name="category" onChange={this.handleToggleChange}>
        {mappedCategories}
        </select> <br />
        <input type="submit" value="Submit"/>
        </form> 
        </>
    );
    }
}

export default NewListitem;