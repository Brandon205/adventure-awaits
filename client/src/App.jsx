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
          this.setState({ token: res.data.token });
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

  logout = () => {
    localStorage.removeItem('mernToken');
    this.setState({ token: '', user: null });
  }

  render() { 
    let navContents;
    if (this.state.user) {
      navContents = (
        <nav>
          <div className="left">
            <button onClick={this.logout}>Logout</button>
          </div>
          <div className="middle">
            <Link to="/homepage">Adventure Awaits</Link>
          </div>
          <div className="right">
            <Link to='/profile'>Profile</Link>{' | '}
            <Link to='/profile/new'>New</Link>
          </div>
        </nav>
      );
    } else {
      navContents = (
        <nav>
          <div className="left">
            <Link to='/signup'>Signup</Link>{' | '}
            <Link to='/login'>Login</Link>
          </div>
          <div className="middle">
            <Link to="/homepage">Adventure Awaits</Link>
          </div>
          <div className="right">
            <p>Welcome!</p>
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
        <Route exact path="/profile/:cName" render={ (props) => <Bucketlist {...props} /> } />
        <Route exact path="/profile/:id/adventure" render={ (props) => <AdventureDetail {...props} /> } />
        <Route exact path="/profile/:id/edit" render={ (props) => <AdventureEdit {...props} /> } />
      </Router>
    );
  }
}

export default App;
