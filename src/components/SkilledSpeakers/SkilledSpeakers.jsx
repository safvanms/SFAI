import React from "react";
import "./skilledSpeakers.css";

import Speaker1 from "../../Assets/Images/person1.png";
import Speaker2 from "../../Assets/Images/person3.png";
import Speaker3 from "../../Assets/Images/person2.png";
import { FaArrowRight } from "react-icons/fa";

const SkilledSpeakers = () => {
  return (
    <div className="skilled_speakers Flex">
      <div className="speaker">
        <img src={Speaker1} alt="" />
      </div>
      <div className="speaker">
        <img src={Speaker2} alt="" />
      </div>
      <div className="speaker">
        <img src={Speaker3} alt="" />
      </div>
      <div className="skilled_speaker_button Flex">
        Skilled Speakers
        <div className="icon">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SkilledSpeakers;
