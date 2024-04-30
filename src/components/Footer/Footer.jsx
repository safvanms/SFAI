import React from "react";
import "./footer.css";
import TimeSection from "../TimeSection/TimeSection";
import LOGO from "../../Assets/Images/logo..png";
import AtIcon from "../../Assets/Images/at.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container Flex" id="contact">
      <div className="footer_counter_section Flex">
        <div className="footer_heading Flex">
          <h2>Count Every</h2>
          <h2>Second Until Event</h2>
        </div>
        <div className="footer_counter">
          <TimeSection />
        </div>
      </div>
      <div className="footer_section_container Flex">
        <div className="footer_section Flex">
          <img src={LOGO} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="footer_section Flex second_section">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Speakers</p>
          <p>Sponsorship</p>
          <p>Travel</p>
          <p>FAQ</p>
        </div>

        <div className="footer_section Flex">
          <h4>Contact us</h4>
          <p>27 Division St, San Francisco, SF 94016, USA</p>
          <p>+1 800 123 456 789</p>
          <div className="footer_contact_icons Flex">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
        </div>

        <div className="footer_section Flex">
          <h4>Subscribe</h4>
          <div className="subscription_sub_heading Flex">
            <p>Get news & updates</p>
            <img src={AtIcon} alt="icon" />
          </div>
          <div className="line"></div>
          <p>
            Our expertise, as well as our passion for web design, sets us apart
            from other agencies.
          </p>
        </div>
      </div>

      <div className="copyright_container Flex">
        <div className="copyright_section Flex">
          <p>© 2023 San Francisco AI Conference LLC. All Rights Reserved.</p>
          <p>Made w/💜 Savior</p>
          <p>Terms of Use | Proposal Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
