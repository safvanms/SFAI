import React from "react";
import "./badge.css";

import Badge1 from "../../Assets/Images/b1.png";
import Badge2 from "../../Assets/Images/b2.png";
import Badge3 from "../../Assets/Images/b3.png";
import Badge4 from "../../Assets/Images/b4.png";
import Badge5 from "../../Assets/Images/b5.png";
import Badge6 from "../../Assets/Images/b6.png";
import Badge7 from "../../Assets/Images/b7.png";

const Badge = () => {
  return (
    <div className="badge Flex">
      <div className="badge_images Flex">
        <img src={Badge1} alt="badge" />
        <img src={Badge2} alt="badge" />
        <img src={Badge3} alt="badge" />
        <img src={Badge4} alt="badge" />
        <img src={Badge5} alt="badge" />
        <img src={Badge6} alt="badge" />
        <img src={Badge7} alt="badge" />
      </div>
    </div>
  );
};

export default Badge;
