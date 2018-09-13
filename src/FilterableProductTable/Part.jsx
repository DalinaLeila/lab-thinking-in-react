import React from "react";
import Row from "./Row";

const Part = ({ list, category }) => {
  const products = list.map((product, index) => {
    return <Row product={product} key={index} />;
  });

  return (
    <React.Fragment>
      <tr>
        <th>{category}</th>
      </tr>
      {products}
      {/* importing all product rows */}
    </React.Fragment>
  );
};

export default Part;
