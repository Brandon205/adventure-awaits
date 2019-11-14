import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Button, Col, Collection, CollectionItem } from 'react-materialize';
import './css/Login.css'

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
      <div className="App">
        <div className="content2">
          <Col m={6} s={12} className="valign-center offset-s3">
            <Collection header="Your Categories">
              {mappedCategories}
            </Collection>
          </Col>
        </div>
        <Button waves="light" style={{marginRight: '5px'}}>
          <Link className="white-text" to="/listitem/new"> Create A New Adventure! </Link> <br /> 
        </Button>
      </div>
    );
  }
}

export default Profile;