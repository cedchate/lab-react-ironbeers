import React from "react";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100vh",
          }}
        >
          <li>
            <Link to="/beers">
              <img style={{ width: "100vw" }} src={beers} alt="beer" />
              <h2>All Beers</h2>
            </Link>
          </li>
          <li>
            <Link to="/random-beer">
              <img style={{ width: "100vw" }} src={newBeer} alt="NewBeer" />
              <h2>Random Beer</h2>
            </Link>
          </li>
          <li>
            <Link to="/new-beer">
              <img
                style={{ width: "100vw" }}
                src={randomBeer}
                alt="RandomBeer"
              />
              <h2>New Beer</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
