import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

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
    var mappedCategory;
    mappedCategory = this.state.listItems.map((listItem, id) =>  <span key={id}> {listItem.categories[0].name} </span>)
    mappedListitems = this.state.listItems.map((listItem, id) => <Link to="/profile/:id/adventure"> <li key={id}> {listItem.name} </li> </Link> )
                                                                  

    return ( 
      <div>
        <header>Your {mappedCategory} Adventures </header>
        <ul>
          {mappedListitems} <Link to="/profile/:id/edit"> <span> - Edit</span> </Link>
        </ul>
      </div>
    );
  }
}

export default Bucketlist;