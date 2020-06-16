import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import Animations
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHoverIn,
  handleHoverOut,
  handleCityHoverOut,
  handleCityHoverIn,
  staggerRevealClose,
  hideMenu,
  showMenu
} from "./Animations";

// Import Image Assets
import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];

const routes = [
  {
    path: "/opportunities",
    name: "Opportunities",
    onMouseOver: (e) => handleHoverIn(e),
    onMouseOut: (e) => handleHoverOut(e)
  },
  {
    path: "/solutions",
    name: "Solutions",
    onMouseOver: (e) => handleHoverIn(e),
    onMouseOut: (e) => handleHoverOut(e)
  },
  {
    path: "/contact-us",
    name: "Contact us",
    onMouseOver: (e) => handleHoverIn(e),
    onMouseOut: (e) => handleHoverOut(e)
  }
];

const Hamburger = ({ state }) => {
  // Variables for DOM Node refs
  const menuLayer = useRef(null);
  const background = useRef(null);
  const backgroundLayer = useRef(null);
  const imageBackground = useRef(null);
  const links = useRef([]);
  const info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // Animate close
      staggerRevealClose([background.current, backgroundLayer.current]);
      // Set menu to display none
      hideMenu(menuLayer.current);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block and height 100%
      showMenu(menuLayer.current, [
        backgroundLayer.current,
        background.current
      ]);
      // Animate open
      staggerReveal([backgroundLayer.current, background.current]);
      fadeInUp(info.current);
      staggerText([links.current]);
    }
  }, [state]);

  return (
    <div ref={menuLayer} className="hamburger-menu">
      <div
        ref={backgroundLayer}
        className="menu-secondary-background-color"
      ></div>
      <div ref={background} className="menu-layer">
        <div ref={imageBackground} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  {routes.map((route, i) => (
                    <li>
                      <Link
                        to={route.path}
                        onMouseOver={route.onMouseOver}
                        onMouseOut={route.onMouseOut}
                        ref={(el) => (links.current[i] = el)}
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div ref={info} className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((city) => (
                  <span
                    key={city.name}
                    onMouseEnter={() =>
                      handleCityHoverIn(city.image, imageBackground.current)
                    }
                    onMouseOut={() =>
                      handleCityHoverOut(imageBackground.current)
                    }
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
