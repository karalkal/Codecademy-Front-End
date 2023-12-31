import React from "react";

/*
Receive name,description
Render a <p> element with the name prop. Give this element a className of "tile-title"
Iterate over the values in the description object, passed in via props, and render a <p> element for each value and
*/

export const Tile = ({ name, description }) => {
  const descriptionItems = Object.values(description)
    .map(
      (value, idx) =>
        <p className="tile" key={idx}>{value}</p>
    )

  return (
    <div className="tile-container">
      <p className="tile-title">
        {name}
      </p>

      {descriptionItems}

    </div>
  );
};
