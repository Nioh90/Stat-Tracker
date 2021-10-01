import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Username from "../components/Username";
import CSGO from "../CSGO-bg.jpg";
import Splitgate from "../Splitgate-bg.jpg";
import ApexLegends from "../Apex-Legends-bg.jpg";
import origin from "../origin-icon.png";

function SingleGame() {
  const { name } = useParams();
  const { gameName, setGameName, setName, platform, setPlatform } =
    useGlobalContext();
  const image =
    (gameName === "CSGO" && CSGO) ||
    (gameName === "Splitgate" && Splitgate) ||
    (gameName === "Apex Legends" && ApexLegends);
  const searchN = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  function searchName() {
    setName(searchN.current.value);
  }
  function searchPlatform(e) {
    setPlatform(e.target.value);
  }
  setGameName(name);
  const [pressed, setPressed] = React.useState(false);
  React.useEffect(() => {
    window.onpopstate = () => {
      setPressed(true);
      setName("");
      setPlatform("");
    };
  });
  return (
    // prettier-ignore
    <div
      className="container-fluid single-game"
      style={{ background
      :"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(" + image + ") center/cover fixed no-repeat" }}
    >
      <h6 className="subsection-heading">{gameName}</h6>
      <form className="subsection-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Enter your User Link or Username</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={searchN}
          onChange={searchName}
          autoFocus
          placeholder="ex: JohnDoe"
        ></input>
        <label htmlFor="name"> Choose your platform: <span>{platform}</span></label>
        {(gameName === "CSGO" && 
        <div className="platform-button">
          <button className="btn steam btn-lg " type ="submit" value="steam" onClick={searchPlatform}>
            <i class="fab fa-steam"></i> steam
          </button>
        </div>) ||
    (gameName === "Splitgate" &&　
    <div className="platform-button">
          <button className="btn steam btn-lg " type ="submit" value="steam" onClick={searchPlatform}>
            <i class="fab fa-steam"></i> steam
          </button>
          <button className="btn psn btn-lg " type ="submit" value="psn" onClick={searchPlatform}>
            <i class="fab fa-playstation"></i> PSN
          </button>
          <button className="btn xbl btn-lg " type ="submit" value="xbl" onClick={searchPlatform}>
            <i class="fab fa-xbox"></i> XBL
          </button>
        </div>) ||
    (gameName === "Apex Legends" && <div className="platform-button">
          <button className="btn origin btn-lg" type ="submit" value="origin" onClick={searchPlatform}>
            <img src={origin} alt="origin logo"/> origin
          </button>
          <button className="btn btn-lg psn" type ="submit" value="psn" onClick={searchPlatform}>
            <i class="fab fa-playstation"></i> PSN
          </button>
          <button className="btn xbl btn-lg " type ="submit" value="xbl" onClick={searchPlatform}>
            <i class="fab fa-xbox"></i> XBL
          </button>
        </div>)}
        
      </form>
      <Username />
    </div>
  );
}

export default SingleGame;
