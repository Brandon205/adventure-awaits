import React from 'react';
import { Link } from 'react-router-dom';
import './css/Homepage.css';


class HomePage extends React.Component {
  
  render () {
    var links; 
    if (this.props.token) {
      links = (
        <div className="homepage-link">
          <Link className="link-one indigo-text text-darken-2" to="/profile"> Your Profile </Link> 
          <Link className="indigo-text text-darken-2" to="/listitem/new"> Create A New Adventure </Link>
        </div>
      )
    } else {
      links = (
        <div className="homepage-link">
          <Link  className="link-one indigo-text text-darken-2" to="/signup"> Signup </Link>
          <Link  className="link-one indigo-text text-darken-2" to="/login"> Login </Link>
        </div>
      )
    }
    return (
      <div className="App">
        <div className="homepage-content">
          <h1 className="AppName white-text">Adventure Awaits</h1>
          <div className="main-text">
            <h3 className="top-text grey-text text-darken-4 lighten-4 center">
              Keep track of your dream adventures all in one place. 
            </h3>
            <h4 className="grey-text text-darken-4 lighten-4 center">
              Choose from any of 14 detailed categories to begin organizing your future adventures. 
              Upon completing your adventure, upload photos and notes of the accomplishment so you'll 
              never forget the fantastic day. 
            </h4>
            <h5 className="grey-text text-darken-4 lighten-4 center">
              From Art, Fitness, Travel, and more, Adventure Awaits has got you covered.
            </h5>
          </div>
        </div>
        <div>
          {links}
        </div>
      </div>
    )
  }
};

export default HomePage;

