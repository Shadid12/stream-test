import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import styled from 'styled-components';
import Register from './containers/Register';
import Home from './containers/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';
import Video from './containers/Video';

const NavSection = styled.section`
  padding: 10px 70px;
`

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <NavSection className="container">
            <Link to="/" className="button button-clear">Home</Link>
            <Link to="/register" className="button button-clear">Register</Link>
            <Link to="/login" className="button button-clear">Login</Link>
            <Link to="/me" className="button button-clear">My Profile</Link>
          </NavSection>
        </nav>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/me">
            <Profile />
          </Route>
          <Route path="/video/:id">
            <Video />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}