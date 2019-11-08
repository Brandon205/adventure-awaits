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
    Axios.get('/api/usercategories', config).then(cats => {
      this.setState({ categories: cats.data })
    })
  }

  render() { 

    return ( 
      <Link to="/profile/new"> Create your new Adventure! </Link>
    );
  }
}

export default Profile;