import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Bucketlist extends React.Component {
  state = { 
    category: [],
    listItems: []
  }

  componentDidMount = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.get(`/api/listitems/${this.props.match.params.cName}`, config).then(response => {
      this.setState({ category: response.data, listItems: response.data })
    })
  }

  render() { 
    var mappedListitems;
    if (this.state.listItems.length > 0 && this.state.category.length > 0) {
      mappedListitems = this.state.listItems.map((listItem, id) => <div key={id}><li><Link to={`/profile/${listItem._id}/adventure`}>{listItem.name} - </Link> <Link to={`/profile/${listItem._id}/edit`}>Edit</Link> </li> </div>)
    } else {
      mappedListitems = <li>Loading...</li>
    }

    return ( 
      <div>
        <header>Your {this.props.match.params.cName} Adventures </header>
        <ul>
          {mappedListitems}
        </ul>
      </div>
    );
  }
}

export default Bucketlist;