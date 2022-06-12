import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
// import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
import Search from "./Search";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={() => <About about="About" />} />
        <Route path="/user/:fname/:lname" component={User} />
        <Route
          exact
          path="/contact"
          render={() => <Contact contact="Contact" />}
        />
        <Route path="/search" component={Search} />
        {/* <Route component={Error} /> */}
        <Redirect to='/' />
      </Switch>
    </>
  );
};
export default App;
// render is good we use when we use props
// component is also good but it is used when no props were used you can adjust value simply
