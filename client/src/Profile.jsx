import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './css/index.css'

class Profile extends React.Component {
  state = {
    categories: []
  }

  componentDidMount = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.get('/api/usercategories', config).then(response => {
      this.setState({ categories: response.data })
    })
  }

  render() { 
    var mappedCategories;
    if(this.state.categories.length) {
      mappedCategories = this.state.categories.map((category, id) => <li key={id}> <Link to={`/profile/${category}`}>{category}</Link></li> )
    } else {
      mappedCategories = <p>Create a New Adventure Below</p>
    }
    

    return ( 
      <div>
      <h3>Your Categories: </h3>
      <ul>
      {mappedCategories}
      </ul>
      <Link to="/listitem/new"> Create your new Adventure! </Link> <br /> 
      </div>
    );
  }
}

export default Profile;