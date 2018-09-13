import React, { Component } from "react";
import Part from "./Part";

const Table = ({ data, search, check }) => {
  // console.log(data);
  const Sporting = data
    .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    .filter(el => el.category === "Sporting Goods");
  const Electronics = data
    .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    .filter(el => el.category === "Electronics");

  // console.log(Sporting);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {Sporting.length !== 0 && (
          <Part list={Sporting} category="Sporting Goods" />
        )}
        {Electronics.length !== 0 && (
          <Part list={Electronics} category="Electronics" />
        )}
      </tbody>
    </table>
  );
};

// sporting.length !==0 && will print the Part ONLY if the array has at least one element inside it
export default Table;
