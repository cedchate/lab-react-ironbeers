import React from "react";
import { useState, useEffect } from "react";
import BeerLi from "../components/BeerLi";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((res) => setAllBeers(res))
      .catch((error) => console.log(error));
  }, []);
  let beerToDisplay = allBeers;
  if (query !== "") {
    beerToDisplay = allBeers.filter((beer) => {
      return beer.name.toLowerCase().includes(query.toLowerCase());
    });
  }
  console.log(beerToDisplay.length);
  if (beerToDisplay === []) {
    return <></>;
  }
  // console.log(allBeers)
  return (
    <div>
      <input
        style={{
          width: "80vw",
          borderRadius: "50px",
          height: "5vh",
          borderColor: "#d5d3d3",
          borderStyle: "solid",
          paddingLeft: "5vw",
          marginTop: "2vh",
        }}
        type="text"
        value={query}
        name="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      {beerToDisplay.map((beer) => {
        return <BeerLi key={beer._id} beer={beer} />;
      })}
    </div>
  );
};

export default Beers;
