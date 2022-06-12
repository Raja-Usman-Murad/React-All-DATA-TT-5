import React from "react";
// import web from "../src/images/logo.png";
import Card from './Card';
import Sdata from './Sdata';
const Service = () => {
  return (
    <>
      <div className pt-5 >
        <h1 className="text-center mt-4">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
     {
       Sdata.map((val)=>{
         return(
           <Card
           key={val.id}
           name={val.sname} 
           img={val.imgSrc}
            des={val.cname}
            linkk={val.link} />
         )
       })
     }
     </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
