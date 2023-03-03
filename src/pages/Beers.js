import React from "react";
import { useState, useEffect } from "react";
import BeerLi from "../components/BeerLi";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((res) => setAllBeers(res))
      .catch((error) => console.log(error));
  }, []);
  if (allBeers === []) {
    return <></>;
  }
  // console.log(allBeers)
  return (
    <div>
      {allBeers.map((beer) => {
        return <BeerLi key={beer._id} beer={beer} />;
      })}
    </div>
  );
};

export default Beers;
