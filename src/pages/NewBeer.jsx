import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributed, setContributed] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributed,
    };
    try {
      await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
        method: "post",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(newBeer),
      });
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>Name</label>
        <input
          onChange={(event) => setName(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "50px",
            height: "5vh",
            borderColor: "#d5d3d3",
            borderStyle: "solid",
            paddingLeft: "5vw",
          }}
          value={name}
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>Tagline</label>
        <input
          onChange={(event) => setTagline(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "50px",
            height: "5vh",
            borderColor: "#d5d3d3",
            borderStyle: "solid",
            paddingLeft: "5vw",
          }}
          value={tagline}
          type="text"
          name="tagline"
          id="tagline"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>Description</label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "25px",
            height: "20vh",
            border: "2px solid rgb(213, 211, 211)",
            padding: "1vh 5vw",
            resize: "none",
          }}
          value={description}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>First Brewed</label>
        <input
          onChange={(event) => setFirstBrewed(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "50px",
            height: "5vh",
            borderColor: "#d5d3d3",
            borderStyle: "solid",
            paddingLeft: "5vw",
          }}
          value={firstBrewed}
          type="text"
          name="first_brewed"
          id="first_brewed"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>Brewers Tips</label>
        <input
          onChange={(event) => setBrewersTips(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "50px",
            height: "5vh",
            borderColor: "#d5d3d3",
            borderStyle: "solid",
            paddingLeft: "5vw",
          }}
          value={brewersTips}
          type="text"
          name="brewers_tips"
          id="brewers_tips"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>Attenuation Level</label>
        <input
          onChange={(event) => setAttenuationLevel(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "50px",
            height: "5vh",
            borderColor: "#d5d3d3",
            borderStyle: "solid",
            paddingLeft: "5vw",
          }}
          value={attenuationLevel}
          min="0"
          type="number"
          name="attenuation_level"
          id="attenuation_level"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 2rem",
          alignItems: "flex-start",
        }}
      >
        <label style={{ fontWeight: "900" }}>Contributed By</label>
        <input
          onChange={(event) => setContributed(event.target.value)}
          style={{
            width: "80vw",
            borderRadius: "50px",
            height: "5vh",
            borderColor: "#d5d3d3",
            borderStyle: "solid",
            paddingLeft: "5vw",
          }}
          value={contributed}
          type="text"
          name="contributed_by"
          id="contributed_by"
        />
      </div>
      <button
        style={{
          backgroundColor: "#03a9f4",
          color: "white",
          width: "80vw",
          height: "5vh",
          borderRadius: "50px",
          border: "none",
          marginTop: "4vh",
        }}
      >
        ADD NEW
      </button>
    </form>
  );
};

export default NewBeer;
