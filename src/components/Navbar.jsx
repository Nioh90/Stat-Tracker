import React from "react";
import apexLogo from "../apex-logo.png";
import splitgateLogo from "../splitgate-logo.png";
import csgoLogo from "../csgo-icon.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid dropdown-padding">
          <a href="/" className="navbar-brand">
            <span>Stat-Tracker</span>
            <i className="logo fas fa-gamepad"></i>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle "
                  href="/games"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  GAMES
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/games/Apex Legends">
                    <img src={apexLogo} className="game-logo" alt="apex logo" />
                    <span>Apex Legends</span>
                  </a>
                  <a className="dropdown-item" href="/games/Splitgate">
                    <img
                      src={splitgateLogo}
                      className="game-logo"
                      alt="apex logo"
                    />
                    <span>Splitgate</span>
                  </a>
                  <a className="dropdown-item" href="/games/CSGO">
                    <img src={csgoLogo} className="game-logo" alt="apex logo" />
                    <span>Counter Strike: Global Offensive</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
