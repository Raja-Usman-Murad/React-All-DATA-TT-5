import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <>
      <div className="mainERRORTEXT">
        <h1>404 ERROR PAGE!</h1>
        <h3>Sorry,This page does not exit</h3>
        <button
          className="gobackerrorbtn"
          onClick={() => {
            history.push("/");
          }}
        >
          GO BACK
        </button>
      </div>
    </>
  );
};
export default Error;
