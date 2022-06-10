import { useState, useEffect } from "react";

function Banner() {
  let [name, setName] = useState("Bruce Banner");
  let [city, setCity] = useState("New York");
  let [powers, setPowers] = useState(
    {
      strength: 100,
      durability: 67,
    },
    []
  );

  useEffect(() => {
    console.log("banner component loaded");
  }, [name, city]);
  // let name = "Bruce Banner";

  function changeName() {
    // name = "Hulk";
    // console.log(name);
    // setName("Hulk");
    setCity("Brooklyn");
  }
  return (
    <div className="banner">
      <h1>
        {name}
        {city}
      </h1>
      <button className="btn" onClick={changeName}>
        We have a Hulk
      </button>
    </div>
  );
}

export default Banner;
