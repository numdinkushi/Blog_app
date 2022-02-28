import React from "react"
import { Homepage } from "./components/Pages/Homepage/Homepage.jsx";
import Single from "./components/Pages/single/single.jsx";
import Topbar from "./components/Top-bar/Topbar.jsx";
import Write from './components/Pages/write/Write';
import Settings from "./components/Pages/settings/Settings.jsx";
import Login from "./components/Pages/login/Login.jsx";
import Register from './components/Pages/register/Register';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  const user = false;
  return (
    <Router>
      <Topbar /> 
<Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route path="/register">
     {user ? <Homepage /> : <Register />}
    </Route>
    <Route path="/login">
    {user ? <Homepage /> : <Login />}
    </Route>
    <Route path="/write">
    {user ? <Write /> : <Register />}
    </Route>

    <Route path="/settings">
    {user ? <Settings /> : <Register />}
    </Route>


    <Route path="/post/:postId">
      <Single />
    </Route>


</Switch>

    </Router>


  ); 
}

export default App;
