import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function Username() {
  //   const api = "50cf2811-0f6c-4bf3-a4b1-95d0eb29e4c0";
  //   const trn = "TRN-Api-Key";

  const { name, platform, gameName } = useGlobalContext();
  let game = gameName;
  game = game.toLowerCase();
  if (gameName === "Apex Legends") {
    game = "apex";
  }
  const [userInfo, setUserInfo] = React.useState(null);
  const url = "/v2/" + game + "/standard/profile/" + platform + "/" + name;
  async function fetchUsername() {
    try {
      //   const headers = { "TRN-Api-Key": "50cf2811-0f6c-4bf3-a4b1-95d0eb29e4c0" };
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "TRN-Api-Key": "50cf2811-0f6c-4bf3-a4b1-95d0eb29e4c0",
          Accept: "application/json",
          "Accept-Encoding": "gzip",
        },
      });
      const data = await response.json();
      if (data.data.platformInfo) {
        const { platformInfo } = data.data;
        const { stats } = data.data.segments[0];
        const { avatarUrl: avatar, platformUserHandle: username } =
          platformInfo;
        const newUserInfo = {
          avatar,
          username,
          stats,
        };
        setUserInfo(newUserInfo);
      }
    } catch (error) {
      setUserInfo(null);
      console.log("Error");
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsername();
  }, [name, platform]);
  if (!name) {
    return <h4>Please enter a User-Name or User Link</h4>;
  }
  if (!userInfo) {
    return <h4>Enter a correct User-Name or User Link</h4>;
  } else {
    const { avatar, username, stats } = userInfo;
    return (
      <div className="user-stats">
        <img src={avatar} />
        <h7>{username}</h7>
        <h7>{platform}</h7>

        <ul>
          {Object.keys(stats).map((stat, i) => {
            return (
              <div className="stat">
                <div key={i}>
                  <li className="stat-head">
                    <span>{stats[stat].displayName}</span>
                  </li>
                  <li className="stat-value">
                    <span>{stats[stat].displayValue}</span>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
        <Link to={"/games/" + gameName + "/maps&weapons"}>
          <button type="button" className="btn btn-danger btn-lg">
            Go to{" "}
            {(gameName === "CSGO" && <span>Map / Weapon</span>) ||
              (gameName === "Splitgate" && <span>Map / Weapon</span>) ||
              (gameName === "Apex Legends" && <span>Legend</span>)}{" "}
            Stats!
          </button>
        </Link>
      </div>
    );
  }
}
export default Username;
