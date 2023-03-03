import React from "react";
import { Link } from "react-router-dom";

const BeerLi = (props) => {
  // console.log(props.beer.name)
  return (
    <Link to={`/beers/${props.beer._id}`}>
      <div
        style={{
          display: "flex",
          margin: "2rem",
          borderBottom: "1px solid grey",
        }}
      >
        <picture>
          <img
            style={{ height: "20vh", margin: "1rem" }}
            src={props.beer.image_url}
            alt="beer"
          />
        </picture>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h2 style={{ textAlign: "start" }}>{props.beer.name}</h2>
          <p style={{ color: "grey", fontWeight: "900" }}>
            {props.beer.tagline}
          </p>
          <p style={{ textAlign: "start" }}>
            <strong>Created by:</strong> {props.beer.contributed_by}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BeerLi;
