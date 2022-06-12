import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      
              <div className="col-md-4 col-10 mx-auto" style={{height:'500px'}}>
                <div className="card">
                  <img src={props.img} class="card-img-top" alt="..." height='250px' />
                  <div className="card-body">
                    <h5 style={{fontWeight:'bolder'}} className="card-title">{props.name}</h5>
                    <p className="card-text">
                      {props.des}
                    </p>
                    <NavLink to='/error' className="btn btn-primary">
                      Order Now
                    </NavLink>
                  </div>
                </div>
              </div>
           
    </>
  );
};
export default Card;
