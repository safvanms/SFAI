import React from "react";
import "./offerSection.css";

import Person1 from "../../Assets/Images/off1.png";
import Person2 from "../../Assets/Images/off2.png";
import Person3 from "../../Assets/Images/off3.png";
import Person4 from "../../Assets/Images/off4.png";

import Icon1 from "../../Assets/Images/Vector.png";
import Icon2 from "../../Assets/Images/network 1.png";
import Icon3 from "../../Assets/Images/career-promotion 1.png";
import Icon4 from "../../Assets/Images/conversation 1.png";

const offers = [
  {
    id: 1,
    heading: "Unparalleled Knowledge",
    description:
      "Gain a comprehensive understanding of AI's latest trends, advancements, and challenges. Our diverse sessions will cover cutting-edge topics beyond the conventional, ensuring you stay one step ahead in this rapidly evolving field. ",
    Img: Person1,
    icon: Icon1,
  },
  {
    id: 2,
    heading: "Networking Opportunities",
    description:
      "Connect with industry leaders, influential professionals, and fellow AI enthusiasts. Forge meaningful connections that can shape your career and open doors to new collaborations and partnerships. ",
    Img: Person2,
    icon: Icon2,
  },
  {
    id: 3,
    heading: "Career Development",
    description:
      "Discover exciting career opportunities in the realm of AI. Whether you're a seasoned professional or just starting your journey, our conference offers valuable insights and guidance to navigate the AI landscape and accelerate your professional growth.",
    Img: Person3,
    icon: Icon3,
  },
  {
    id: 4,
    heading: "Engaging Discussion",
    description:
      "Engage in dynamic conversations and thought-provoking discussions with like-minded individuals who share your passion for AI. Explore new perspectives, exchange ideas, and contribute to shaping the future of this transformative technology.",
    Img: Person4,
    icon: Icon4,
  },
];

const OfferSection = () => {
  return (
    <div className="offers_container Flex">
        <div className="offer_heading">
            <p>what we offer</p>
            <h3>Why Attend the San Francisco</h3>
            <h2>AI Conference?</h2>
        </div>
      <div className="offers_section Flex">
        {offers.map(({ id, heading, description, Img, icon }) => (
          <div className="offers_card" key={id}>
            <div className="offer_main_image">
              <img src={Img} alt="offer_bg" />
              <div className="offer_sub_image Flex">
                <img src={icon} alt="icon" />
              </div>
            </div>
            <h3>{heading}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
