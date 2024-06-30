import React from "react";

import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          corporis doloribus, harum maxime sint rem officiis, cum autem quia
          voluptatibus error ipsum tempore accusantium commodi esse ab obcaecati
          earum voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          quod.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
