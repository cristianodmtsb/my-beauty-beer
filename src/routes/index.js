import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favoritos" component={Favoritos} />
    </Switch>
  );
}
