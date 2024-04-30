import React from "react";
import "./event.css";

import SVG from "../../Assets/Images/event_svg.png";
import Button from "../Button/Button";

const Event = () => {
  return (
    <div className="event_container Flex">
      <div className="event_svg">
        <img src={SVG} alt="svg" />
        <div className="event_contents Flex">
          <h2>Don't miss out on </h2>
          <h1>this extraordinary event! </h1>
          <p>
            Register now to secure your spot at the San Francisco AI Conference.
            Experience the thrill of being part of a groundbreaking conference
            that pushes the boundaries of AI exploration. Together, let's unlock
            the limitless possibilities of artificial intelligence. z
          </p>
          <div className="event_register_button">
            <Button
              content={"REGISTER NOW"}
              color={"white"}
              icon={"var(--primary-color)"}
              text={"var(--primary-color)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
