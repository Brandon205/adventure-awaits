import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Button, Col, Collection, CollectionItem } from 'react-materialize';
import './css/Login.css';

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
      mappedCategories = this.state.categories.map((category, id) => <CollectionItem key={id}><Link to={`/profile/${category}`}>{category}</Link><i className="material-icons secondary-content">arrow_forward</i></CollectionItem>)
    } else {
      mappedCategories = <p>Create a New Adventure Below</p>
    }

    return ( 
      <div className="category-background App">
        <div className="no-bkg-content">
            <Col m={6} s={12}>
              <Collection header="Your Categories" id="no-margin">
                {mappedCategories}
              </Collection>
            </Col>
          <Button waves="light">
            <Link className="white-text" to="/listitem/new"> Create A New Adventure! </Link> <br /> 
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
