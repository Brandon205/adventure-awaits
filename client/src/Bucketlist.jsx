import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {Checkbox} from 'react-materialize';
import './css/BucketList.css';
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
    let config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.put(`/api/profile/${e.target.value}`, {checked: e.target.checked}, config).then(res => {
      let listItemCopy = [...this.state.listItems]
      listItemCopy[id] = res.data
      this.setState({ listItems: listItemCopy })
    })
  }

  render() { 
    var mappedListitems;
    if (this.state.listItems.length > 0 && this.state.category.length > 0) {
      mappedListitems = this.state.listItems.map((listItem, id) => <div className="describe" key={id}><Checkbox className="checkbox" checked={listItem.checked} value={listItem._id} label='' onChange={(e) => this.handleChecked(e,id)} /><Link className="mapped-items" to={`/profile/${listItem._id}/adventure/${this.props.match.params.cName}`}>{listItem.name}</Link>   -   <Link className="edit-items"to={`/profile/${listItem._id}/edit/${this.props.match.params.cName}`}>Describe</Link> </div>)
    } else {
      mappedListitems = <li>Loading...</li>
    }

    return ( 
      <div className="category-background">
          <div className="list-items">
            <div className="category-name">Your {this.props.match.params.cName} Adventures</div>
            <ul>
              {mappedListitems}
            </ul>
          </div>
      </div>
    );
  }
}

export default Bucketlist;