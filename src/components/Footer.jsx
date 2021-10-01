import React from "react";
import logo from "../k-logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="row justify-content-center">
        <div className="col">
          <i className="social-icon fab fa-facebook-f "></i>
        </div>
        <div className="col">
          <i className="social-icon fab fa-twitter"></i>
        </div>
        <div className="col social-icon">
          <a href="https://kunalpaul.herokuapp.com" target="_blank">
            <img className="k-logo" src={logo} alt="k-logo" />
          </a>
        </div>
        <div className="col">
          <i className="social-icon fab fa-instagram"></i>
        </div>
        <div className="col">
          <i className="social-icon fas fa-envelope"></i>
        </div>
      </div>
      <p>© Copyright {year} Kunal Paul</p>
    </footer>
  );
}

export default Footer;
