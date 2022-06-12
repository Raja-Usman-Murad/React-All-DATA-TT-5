import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../src/images/logo.png";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row" style={{ marginTop: "0px", height: "auto" }}>
                <div
                  className="col-md-6 pt-5  mt-5 pt-lg-0 order-1 order-lg-1 d-flex  flex-column"
                  style={{ marginTop: "20px" }}
                >
                  <h1>
                    {props.name}
                    <strong className="brand-name">RAJA'S ACADEMY</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of graphic designers.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1  order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="imglogo"
                    className="img-fluid animated"
                    style={{ borderRadius: "20px" }}
                    width="400px"
                    height="400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
