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
      console.log(`🙉`, response.data)
      this.setState({ category: response.data, listItems: response.data })
    })
    // console.log( `🐼`, this.state.listItems.categories)
  }

  render() { 
    var mappedListitems;
    var mappedCategory;
    mappedListitems = this.state.listItems.map((listItem, id) => <Link to="/profile/:id/adventure"> <li key={id}> {listItem.name} </li> </Link> )
                                                                  
    mappedCategory = this.state.listItems.map((listItem, id) =>  <span key={id}> {listItem.categories[0].name} </span>)

    return ( 
      <div>
        <header>Your {mappedCategory} Adventures </header>
        <ul>
          {mappedListitems}
        </ul>
      </div>
    );
  }
}

export default Bucketlist;