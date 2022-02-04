import React from "react";

export const Image = ({ imageName}) => {
  return (
    <picture>
      <img src={process.env.PUBLIC_URL + `/images/${imageName}.jpg`} alt={imageName} />
    </picture>
  );
};

