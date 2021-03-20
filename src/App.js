import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "firebase";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Errorpage from "./Components/404/Error";
import Welcome from "./Components/Welcome/Welcome";
import Dk from "./Components/Dk";

function App() {
  const [checkUser, setcheckUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setcheckUser(true);
      } else {
        setcheckUser(false);
      }
    });
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Welcome} />
        {!checkUser && <Route path="/login" component={Login} />}
        {!checkUser && <Route path="/done" component={Dk} />}
        {!checkUser && <Route path="/sign-up" component={Signup} />}
        <Route path="" exact component={Errorpage} />
      </Switch>
    </div>
  );
}

export default App;
