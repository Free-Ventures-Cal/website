import React from "react";
import instagram from "./../assets/instagram.png";
import twitter from "./../assets/twitter.png";
import fb from "./../assets/facebook.png";
import medium from "./../assets/medium.png";
import logocircle from "./../assets/logo-circle.png";

import { Link } from "react-router-dom";

import "./../styles/Footer.css";
import "./../styles/App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <span>
          <Link exact to="/">
            <img src={logocircle} />
          </Link>
          <p>
            Founded in 2013, Free Ventures is a 501(c)(3) student-run non-profit
            with the mission of making entrepreneurship accessible to UC
            Berkeley students of all backgrounds by empowering them with the
            support to innovate and build.
          </p>
        </span>
        <span>
          <h1>Stay updated with our newsletter</h1>
          <p>
            Every month we feature teams, talk about our processes, and keep the
            community updated with FreeV news! Drop your email below to stay
            updated with what's happening in the startup community!
          </p>
          <a
            href="https://freeventures.substack.com/"
            className="genericButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a>
        </span>
        <span className="links">
          <p>Menu</p>
          <Link to="/program">Program</Link>
          <Link to="/team">Team</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/fellowship">Fellowship</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/contact">Contact</Link>
        </span>
        <span className="links">
          <p>Connect with us</p>
          <a href="https://www.instagram.com/free_ventures/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="" />
            Instagram
          </a>
          <a href="https://twitter.com/FreeVentures" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="" />
            Twitter
          </a>
          <a href="https://www.facebook.com/FreeVentures/" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="" />
            Facebook
          </a>
          <a href="https://medium.com/@FreeVentures" target="_blank" rel="noopener noreferrer">
            <img src={medium} alt="" />
            Medium
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
