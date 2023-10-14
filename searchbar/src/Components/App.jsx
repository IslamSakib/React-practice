import React, { useState } from "react";
import data from "../data";
import "../css/app.css";
import "../css/table.css";

export default function App() {
  const [search, setSearch] = useState("");

  let handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <main>
        <h1>Search Your Query Here </h1>
        <br />
        <div className="search-bar">
          <input
            onChange={handleChange}
            id="inputTxt"
            type="text"
            placeholder="Search by first name "
          />
          <i className="bi bi-search"></i>
        </div>
        <figure className="wrapper">
          <table>
            <caption className="visually-hidden">
              Product plans and their available features
            </caption>
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </figure>
      </main>
    </>
  );
}
