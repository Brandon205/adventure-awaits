import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

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
    if(!this.state.categories.length) {
      mappedCategories = <p> Create a New Adventure Above</p>
    } 
    // TODO: Make sure this works when /profile/new POST route is complete
    // else {
    //   mappedCategories = <li> {categories } </li> 
    // }
    

    return ( 
      <div>
      <Link to="/profile/new"> Create your new Adventure! </Link> <br /> 
      <h3>Your Adventures: </h3>
      <ul>
      {mappedCategories}
      </ul>
      </div>
    );
  }
}

export default Profile;