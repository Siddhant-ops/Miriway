import React, { Fragment } from "react";
import { useHistory } from "react-router";

const Errorpage = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 3000);

  return (
    <Fragment>
      <h1>Hello Error</h1>
    </Fragment>
  );
};

export default Errorpage;
