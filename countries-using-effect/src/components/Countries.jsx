import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return <div>
    <h1>Visitig Every Countries</h1>
    <h5>Available Countries: {countries.length}</h5>
  </div>;
}
