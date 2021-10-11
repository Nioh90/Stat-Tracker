import React from "react";
import { Link } from "react-router-dom";
import brand from "../Stat tracker.mp4";
import startGIF from "../start-press-button.gif";

function Home() {
  return (
    <div className="home">
      <div className="brand">
        <video src={brand} autoPlay={true} loop={true} muted />
      </div>

      <div className="container-fluid banner">
        <div className="gradient"></div>
        <p>Find the stats of your favourite games.</p>
        <div className="start-button">
          <img src={startGIF} alt="press start gif" />
          <Link to="/games">
            <button type="button" className="btn btn-danger btn-lg">
              START
            </button>
          </Link>
        </div>
      </div>
      <div className="gradient-footer"></div>
    </div>
  );
}

export default Home;
