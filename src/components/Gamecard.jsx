import React from "react";
import { Link } from "react-router-dom";
import Apex from "../Apex.jpg";
import Splitgate from "../Splitgate.jpg";
import CSGO from "../CSGO.jpg";

function Gamecard(props) {
  const name = props.name;
  const csgo = "Counter Strike: Global Offensive";
  let image = 0;
  if (name === "Apex Legends") image = Apex;
  else if (name === "Splitgate") image = Splitgate;
  else if (name === "CSGO") image = CSGO;
  return (
    <div className="game-card-container">
      <div className="card">
        <img src={image} className="card-img-top" alt={image} />
        <div className="card-body">
          {" "}
          <h5 className="card-title">{name === "CSGO" ? csgo : name}</h5>
        </div>

        <div className="card-footer">
          <Link to={"/games/" + name}>
            <button type="button" className="btn btn-lg btn-outline-light">
              Check your Stats
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gamecard;
