import { useEffect, useState } from "react";
import "./App.css";
// import Header from "./Header";
import Avenger from "./Avenger";
import Banner from "./Banner";
import Weather from "./Weather";

function App() {
  let pokemons = [
    {
      name: "Pikachu",
      type: "Electric",
    },
    {
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      name: "Onyx",
      type: "Rock",
    },
    {
      name: "Charizard",
      type: "Fire",
    },
  ];

  return (
    <div className="App">
      {/* <h1 className="title">Avengers List</h1> */}

      {/* <div className="container">
        <Avenger name="Ironman" age="34"></Avenger>
        <Avenger name="Thor" age="1500"></Avenger>
        <Avenger name="Captain America" age="105"></Avenger>
      </div> */}
      {/* <Banner></Banner> */}
      {/* <div className="container">
        {pokemons.map(function (pokemon, index) {
          return (
            <div className="card pk-card" key={index}>
              <h1>{pokemon.name}</h1>
              <h3>{pokemon.type}</h3>
              <button className="btn">View Information</button>
            </div>
          );
        })}
      </div> */}
      <h1 className="title">Weather App</h1>
      <Weather></Weather>
    </div>
  );
}

export default App;
