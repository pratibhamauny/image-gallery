import React from "react";
import "../App.css";
const Image = ({ image }) => {
  return (
    <div className="carousel-container">
      <img src={image} alt={image} />
    </div>
  );
};

export default Image;
