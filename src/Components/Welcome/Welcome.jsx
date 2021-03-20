import React, { Fragment, useEffect, useState } from "react";
import { auth } from "../../Firebase-services/firebase-main";

const Welcome = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((u) => setUser(u));
  });

  const logout = () => {
    auth.signOut();
  };

  return (
    <Fragment>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default Welcome;
