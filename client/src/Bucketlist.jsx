import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Bucketlist extends React.Component {
  state = { 
    category: null,
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

  handleChecked = (e, id) => {
    e.preventDefault();
    console.log(e.target);
    let config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.put(`/api/profile/${e.target.name}`, {checked: e.target.checked}, config).then(res => {
      let listItemCopy = [...this.state.listItems]
      listItemCopy[id] = res.data
      this.setState({ listItems: listItemCopy })
    })
  }

  render() { 
    var mappedListitems;
    if (this.state.listItems.length > 0 && this.state.category.length > 0) {
      mappedListitems = this.state.listItems.map((listItem, id) => <div key={id}><input type="checkbox" checked={listItem.checked} name={listItem._id} onChange={(e) => this.handleChecked(e, id)} /><Link to={`/profile/${listItem._id}/adventure/${this.props.match.params.cName}`}>{listItem.name}</Link> - <Link to={`/profile/${listItem._id}/edit/${this.props.match.params.cName}`}>Edit</Link> </div>)
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