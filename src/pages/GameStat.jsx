import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import FilteredData from "../components/FilteredData";
import Splitgate from "../Splitgate-bg.jpg";
import CSGO from "../CSGO-bg.jpg";
import ApexLegends from "../Apex-Legends-bg.jpg";
function GameStat() {
  const searchS = React.useRef("");
  const searchSpec = React.useRef("");
  const {
    name,
    platform,
    gameName,
    setPlatform,
    setName,
    specificData,
    setSpecificData,
  } = useGlobalContext();
  const [segment, setSegment] = React.useState(null);
  const [data, setData] = React.useState([]);
  let game = gameName;
  game = game.toLowerCase();
  if (gameName === "Apex Legends") {
    game = "apex";
  }
  const image =
    (gameName === "CSGO" && CSGO) ||
    (gameName === "Splitgate" && Splitgate) ||
    (gameName === "Apex Legends" && ApexLegends);
  const url =
    "/v2/" +
    game +
    "/standard/profile/" +
    platform +
    "/" +
    name +
    "/segments/" +
    segment;

  async function fetchStats() {
    if (segment) {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "TRN-Api-Key": "50cf2811-0f6c-4bf3-a4b1-95d0eb29e4c0",
            Accept: "application/json",
            "Accept-Encoding": "gzip",
          },
        });
        const data = await response.json();
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    } else {
      console.log("no segment input");
    }
  }
  useEffect(() => {
    game === "apex" && apex();
    fetchStats();
  }, [segment]);
  function searchSegment(e) {
    setSegment(e.target.value);
  }
  function searchSpecific() {
    setSpecificData(searchSpec.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function apex() {
    setSegment("legend");
    console.log("console log");
  }

  if (!name || !platform) {
    return (
      <h6
        className="single-game subsection-heading"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" +
            image +
            ") center/cover fixed no-repeat",
        }}
      >
        Go back and input your platform and username!
      </h6>
    );
  } else {
    return (
      <div
        className="container-fluid single-game"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" +
            image +
            ") center/cover fixed no-repeat",
        }}
      >
        {game === "csgo" ? (
          <div>
            <h6 className="subsection-heading  ">
              Choose whether you want to find stats for Map or Weapon
            </h6>
            <form className="subsection-form" onSubmit={handleSubmit}>
              <div className="platform-button">
                <button
                  className="btn map steam btn-lg "
                  type="submit"
                  value="map"
                  onClick={searchSegment}
                >
                  <i class="fas fa-globe"></i> Map
                </button>
                <button
                  className="btn weapon steam btn-lg "
                  type="submit"
                  value="weapon"
                  onClick={searchSegment}
                >
                  <i class="fas fa-wrench"></i> Weapon
                </button>
              </div>
            </form>
          </div>
        ) : (
          game === "splitgate" && (
            <div>
              Sorry but the API is disabled for any detailed stats about
              splitgate.
            </div>
          )
        )}
        <div>
          {game === "apex" && (
            <div>
              <h1>
                Enter the <span>{segment}</span> Below!
              </h1>
            </div>
          )}
        </div>
        <div>
          {(!data || data.length == 0) && segment === null ? (
            <p></p>
          ) : (
            <div>
              <form className="subsection-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                  {" "}
                  Enter the <span>{segment}</span>
                </label>
                <input
                  type="text"
                  name="Sname"
                  id="name"
                  ref={searchSpec}
                  onChange={searchSpecific}
                  autoComplete="off"
                ></input>
              </form>

              <FilteredData segment={segment} game={game} segmentData={data} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GameStat;
