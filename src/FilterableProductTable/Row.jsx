import React from "react";

const Row = ({ product }) => {
  // console.log(product);
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Row;
