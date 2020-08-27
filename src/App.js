import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import {Login} from './LoginComp/Login';
import Chat from "./Chat";
import Register from './LoginComp/Register';

function App() {
  return (
    <Router>
      <div className="App" style={{display: "grid"}}>
        <Switch>
          <Route path="/" exact render={()=><Redirect to="/login"/>}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/chat" exact component={Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
