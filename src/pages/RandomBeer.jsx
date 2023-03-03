import React from 'react'
import { useState, useEffect } from "react";
import BeerPage from '../components/BeerPage';

const RandomBeer = () => {
    const [beer, setBeer] = useState(null);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((res) => setBeer(res))
      .catch((error) => console.log(error));
  }, []);
  console.log(beer);
  if (!beer) {
    return <></>;
  }
  return (
    <BeerPage beer={beer} />
  )
}

export default RandomBeer