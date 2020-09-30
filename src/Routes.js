import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
class Routes extends React.Component {
  render() {
    return (
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
