import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "firebase";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  const [checkUser, setcheckUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setcheckUser((cu) => !cu);
      }
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={""} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
