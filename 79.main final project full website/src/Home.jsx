import React from "react";
// import { NavLink } from "react-router-dom";
import web from '../src/images/home.png'
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        visit="/service"
        btnname="Get Started"
        imgsrc={web}
      />
    </>
  );
};
export default Home;
