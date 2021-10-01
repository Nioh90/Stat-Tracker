import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Footer from "./Footer";
import Games from "../pages/Games";
import SingleGame from "../pages/SingleGame";
import GameStat from "../pages/GameStat";
import Navbar from "./Navbar";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/games/:name/:stat">
          <Navbar />
          <GameStat />
        </Route>
        <Route path="/games/:name">
          <Navbar />
          <SingleGame />
        </Route>
        <Route path="/games">
          <Navbar />
          <Games />
        </Route>
        <Route path="*">
          <Navbar />
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
