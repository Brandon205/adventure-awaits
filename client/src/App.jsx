import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Route, 
  Link 
} from 'react-router-dom';
import {HomePage} from './HomePage';
import Profile from './Profile';
import Bucketlist from './Bucketlist';
import NewListitem from './NewListitem';
import AdventureDetail from './AdventureDetail';
import AdventureEdit from './AdventureEdit';
import './App.css';

class App extends React.Component {
  state = { 
    token: '',
    user: null,
    errorMessage: '',
    lockedResult: ''
  }

  checkForLocalToken = () => {
    // Look in LS for localtoken
    let token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined') {
      // if no taken, remove all evidence of mernToken from LS and state
      localStorage.removeItem('mernToken');
      this.setState({ token: '', user: null });
    } else {
      // if token, verify token on backend 
      Axios.post('/auth/me/from/token', { token })
      .then(res => {
        if (res.data.type === 'error') {
          localStorage.removeItem('mernToken');
          this.setState({ token: '', user: null, errorMessage: res.data.message });
        } else {
          // if verified store it back in LS and state
          localStorage.setItem('mernToken', res.data.token);
          this.setState({ token: res.data.token, user: res.data.user });
        }
      })
    }
  }

  componentDidMount = () => {
    this.checkForLocalToken()
  }

  liftToken = ({token, user}) => {
    this.setState({ token, user });
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('mernToken');
    this.setState({ token: '', user: null });
  }

  render() { 
    let navContents;
    if (this.state.user) {
      navContents = (
        <nav>
          <div className="nav-wrapper">
            <ul>
              <li><a onClick={this.logout}>Logout</a></li>
            </ul>
            <Link className="brand-logo center" to="/">Adventure Awaits</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/listitem/new'>New</Link></li>
            </ul>
          </div>
        </nav>
      );
    } else {
      navContents = (
        <nav>
          <div className="nav-wrapper">
            <ul className="left hide-on-med-and-down">
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
            <Link className="brand-logo center" to="/">Adventure Awaits</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>Welcome!</li>
            </ul>
          </div>
        </nav>
      );
    }

    return ( 
      <Router>
        <header>
          {navContents}
        </header>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" render={ () => <Signup liftToken={this.liftToken} /> } />
        <Route exact path="/login" render={ () => <Login liftToken={this.liftToken} /> } />
        <Route exact path="/profile" render={ () => <Profile token={this.state.token} /> } />
        <Route exact path="/listitem/new" render={ () => <NewListitem token={this.state.token} /> } />
        <Route exact path="/profile/:cName" render={ (props) => <Bucketlist {...props} token={this.state.token} /> } />
        <Route exact path="/profile/:id/adventure/:cName" render={ (props) => <AdventureDetail {...props} token={this.state.token} /> } />
        <Route exact path="/profile/:id/edit/:cName" render={ (props) => <AdventureEdit {...props} token={this.state.token} /> } />
      </Router>
    );
  }
}

export default App;
