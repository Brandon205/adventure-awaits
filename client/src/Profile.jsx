import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {

  render() { 
    return ( 
      <>
      <Link to="/profile/new"> Create your new Adventure! </Link> <br /> 
      </>
    );
  }
}

export default Profile;