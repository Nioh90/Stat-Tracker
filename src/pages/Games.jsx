import React from "react";
import Gamecard from "../components/Gamecard";

function Games() {
  return (
    <div className="container-fluid games">
      <div className="games-banner">
        <h2>Check Your Stats</h2>
        <p>Track your stats in popular games Apex, Splitgate, and CSGO!</p>
      </div>
      <div className="row game-card">
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
          <Gamecard name="Apex Legends" />
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
          <Gamecard name="Splitgate" />
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
          <Gamecard name="CSGO" />
        </div>
      </div>
    </div>
  );
}

export default Games;
