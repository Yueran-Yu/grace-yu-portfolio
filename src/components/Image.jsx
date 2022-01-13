import React from "react";

export const Image = ({ imageName, type = "image/webp"}) => {
  return (
    <picture>
      <source srcSet={process.env.PUBLIC_URL + `/images/${imageName}.webp`} type={type} />
      <img src={process.env.PUBLIC_URL + `/images/${imageName}.jpg`} alt={imageName} />
    </picture>
  );
};

