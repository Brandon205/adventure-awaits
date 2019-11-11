import React from 'react';

class Bucketlist extends React.Component {
  state = { 
    category: '',
    listItems: []
  }

  render() { 
    return ( 
      <header>Your {this.state.category} Adventures </header>
    );
  }
}

export default Bucketlist;