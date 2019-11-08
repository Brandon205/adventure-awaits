import React from 'react';

class HomePage extends React.Component {
  state = { 

  }

  render() { 
    // let contents;
    // if (this.state.user) {
    //   contents = (
    //     <>
    //       <p>Hello, {this.state.user.name} </p>
    //       <button onClick={this.handleClick}>Test protected route</button>
    //       <button onClick={this.logout}>Logout</button>
    //       <p>{this.state.lockedResult}</p>
    //     </>
    //   )
    // } else {
    //   contents = (
    //     <>
    //       <Signup liftToken={this.liftToken} />
    //       <Login liftToken={this.liftToken} />
    //     </>
    //   )
    // }

    return ( 
      <h1>This is the HomePage component</h1>
    );
  }
}

export default HomePage;