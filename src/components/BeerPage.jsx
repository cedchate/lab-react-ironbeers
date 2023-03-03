import React from "react";

const BeerPage = (props) => {
  const { beer } = props;
  return (
    <div>
      <picture>
        <img
          style={{ height: "40vh", marginTop: "2rem" }}
          src={beer.image_url}
          alt="beer"
        />
      </picture>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem",
          }}
        >
          <h1>{beer.name}</h1>
          <p style={{ color: "grey", fontWeight: "500", fontSize: "2rem" }}>
            {beer.attenuation_level}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem",
          }}
        >
          <p style={{ color: "grey", fontWeight: "900" }}>{beer.tagline}</p>
          <strong>{beer.first_brewed}</strong>
        </div>
        <p style={{ margin: "1rem" }}>{beer.description}</p>
        <p style={{ color: "grey", fontWeight: "500" }}>
          {beer.contributed_by}
        </p>
      </div>
    </div>
  );
};

export default BeerPage;
