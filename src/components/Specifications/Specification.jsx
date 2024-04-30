import React from "react";
import "./specification.css";

import BG from "../../Assets/Images/specification_bg.png";
import Location from "../../Assets/Images/pin 1.png";

import SP1 from "../../Assets/Images/sp1.png";
import SP2 from "../../Assets/Images/sp2.png";
import SP3 from "../../Assets/Images/sp3.png";
import SP4 from "../../Assets/Images/sp4.png";

const Specification = () => {
  return (
    <div className="specification">
      <img src={BG} alt="bg" />
      <div className="specifications_content Flex">
        <div className="left_specifications_content Flex">
          <div className="s_icon_container Flex">
            <div className="s_icon_cover Flex">
              <div className="s_icon Flex">
                <img src={Location} alt="location" />
              </div>
            </div>
          </div>
          <p>San Francisco </p>
          <h1>AI Conference!</h1>
        </div>
        <div className="right_specifications_content Flex">
          <div className="right_spec_left Flex">
            <img src={SP1} alt="specification" />
            <img src={SP2} alt="specification" />
          </div>
          <div className="right_spec_right Flex">
            <img src={SP3} alt="specification" />
            <img src={SP4} alt="specification" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;
