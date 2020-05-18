import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import Register from './containers/Register';
import Home from './containers/Home';
import Login from './containers/Login';

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
          </NavSection>
        </nav>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}