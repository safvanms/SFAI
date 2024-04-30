import React from "react";
import "./button.css";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ content, color , icon , text}) => {
  return (
    <div className="header_button Flex" style={{ background: color }}>
      <div>
        <FaArrowRight color={icon}/>
      </div>
      <div style={{color:text}}>{content}</div>
    </div>
  );
};

export default Button;
