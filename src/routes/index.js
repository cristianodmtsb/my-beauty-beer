import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import SingleBeer from "../pages/SingleBeer";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/linkes" component={Favoritos} />
      <Route path="/beer/:id" component={SingleBeer} />
    </Switch>
  );
}
