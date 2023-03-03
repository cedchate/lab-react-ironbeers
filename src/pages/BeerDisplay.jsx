import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeerPage from "../components/BeerPage";

const BeerDisplay = () => {
  const [beer, setBeer] = useState(null);
  const beerId = useParams();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/" + beerId.id)
      .then((res) => res.json())
      .then((res) => setBeer(res))
      .catch((error) => console.log(error));
  }, [beerId]);
  console.log(beer);
  if (!beer) {
    return <></>;
  }
  return <BeerPage beer={beer} />;
};

export default BeerDisplay;
