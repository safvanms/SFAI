import React from "react";
import "./featuredSpeakers.css";
import Vector1 from "../../Assets/Images/vector_3.png";
import Vector2 from "../../Assets/Images/vector_3_vec.png";

import Speaker1 from "../../Assets/Images/person1.png";
import Speaker2 from "../../Assets/Images/person2.png";
import Speaker3 from "../../Assets/Images/person3.png";
import Speaker4 from "../../Assets/Images/person4.png";
import Speaker5 from "../../Assets/Images/person5.png";
import Speaker6 from "../../Assets/Images/person6.png";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const speakers = [
  {
    id: 6,
    img: Speaker6,
  },
  {
    id: 3,
    img: Speaker3,
  },
  {
    id: 5,
    img: Speaker5,
  },
  {
    id: 2,
    img: Speaker2,
  },
  {
    id: 4,
    img: Speaker4,
  },
  {
    id: 1,
    img: Speaker1,
  },
];

const FeaturedSpeakers = () => {
  return (
    <div className="featured_speakers" id="speakers">
      <div className="featured_head">
        <img className="main_vector" src={Vector1} alt="main_vector" />
        <img className="sub_vector" src={Vector2} alt="sub_vector" />
        <div className="featured_heading Flex">
          <p className="first_head">leaders and experts</p>
          <p className="second_head">
            <span>Featured</span> <span>speakers</span>
          </p>
          <p className="header_description">
            Anticipate a dynamic assembly of visionary thinkers and seasoned
            specialists, who will generously impart their wisdom, perspectives,
            and prognostications in the field.
          </p>
        </div>
      </div>
      <div className="speakers_section Flex">
        {speakers.map(({ id, img }) => (
          <div className="speaker_details Flex" key={id}>
            <div className="speaker_img Flex">
              <img src={img} alt="speaker" />
            </div>
            <h4>Lorem Ipsum</h4>
            <p>Creative Designer</p>
            <div className="speaker_icons Flex">
                <span><FaFacebookF/></span>
                <span><FaLinkedinIn/></span>
                <span><FaTwitter/></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSpeakers;
