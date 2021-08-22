import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./home";
import Login from "./logar/Login";
import Artista from "./artist";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/artista" component={Artista} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
