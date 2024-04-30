import React from "react";
import "./mainSection.css";
import Header from "../Header/Header";
import BG from "../../Assets/Images/main_bg.png";
import RightImg from "../../Assets/Images/face.png";
import vector from "../../Assets/Images/main_left_vector.png";
import MainHead1 from "../../Assets/Images/main_head_1.png";
import MainHead2 from "../../Assets/Images/main_head_2.png";
import SkilledSpeakers from "../SkilledSpeakers/SkilledSpeakers";
import TimeSection from "../TimeSection/TimeSection";
import Button from "../Button/Button";

const MainSection = () => {
  return (
    <div className="main" id="home">
      <img className="main_bg" src={BG} alt="bg" />
      <img className="face_bg" src={RightImg} alt="bg" />
      <img className="left_vector_bg" src={vector} alt="bg" />
      <div className="main_content_container Flex">
        <img className="main_head" src={MainHead1} alt="heading" />
        <img className="main_head" src={MainHead2} alt="heading" />
        <p>
          Join us for an extraordinary event at the forefront of artificial
          intelligence innovation.
        </p>
        <SkilledSpeakers />
        <TimeSection bgColor={"var(--secondary-gradient)"}/>
        <div className="main_buttons Flex">
          <Button
            content={"BUY TICKETS"}
            color={"white"}
            icon={"var(--primary-color)"}
            text={"black"}
          />
          <Button
            content={"READ MORE"}
            color={"var(--secondary-color)"}
            icon={"white"}
          />
        </div>
        <div className="main_section_notification Flex">
          <div>Join us at 7th San Francisco AI Conference! July 5-9 2018.</div>
          <Button
            content={"REGISTER NOW"}
            color={"var(--primary-gradient)"}
            icon={"white"}
            text={"white"}
          />
        </div>
      </div>
      <div className="header_container">
        <Header />
      </div>
    </div>
  );
};

export default MainSection;
