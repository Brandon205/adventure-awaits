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
      mappedListitems = this.state.listItems.map((listItem, id) => <div key={id}><li><Link to={`/profile/${listItem._id}/adventure/${this.props.match.params.cName}`}>{listItem.name}</Link> - <Link to={`/profile/${listItem._id}/edit/${this.props.match.params.cName}`}>Edit</Link> </li> </div>)
    } else {
      mappedListitems = <li>Loading...</li>
    }

    return ( 
      <div>
        <h3>Your {this.props.match.params.cName} Adventures </h3>
        <ul>
          {mappedListitems}
        </ul>
      </div>
    );
  }
}

export default Bucketlist;