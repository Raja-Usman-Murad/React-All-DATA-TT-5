import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <h1>
        THIS IS {fname}
        {lname} PAGE
      </h1>
      <br />
      <p>MY CURRENT LOCATION IS {location.pathname}</p>
      <br />
      {location.pathname === `/user/raja/usman` ? (
        <button
          onClick={() => history.goBack()}
        >
          GO TO PREV PAGE
        </button>
      ) : null}
      {location.pathname === `/user/raja/usman` ? (
        <button
          onClick={() => history.push('/')}
        >
          GO TO HOME PAGE
        </button>
      ) : null}
    </>
  );
};
export default User;
