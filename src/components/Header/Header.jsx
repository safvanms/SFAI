import React, { useState } from "react";
import "./header.css";
import LOGO from "../../Assets/Images/logo..png";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import { MdMenu, MdClose } from "react-icons/md";

const headerItems = [
  {
    id: 1,
    name: "HOME",
    link: "home",
  },
  {
    id: 2,
    name: "SPEAKERS",
    link: "speakers",
  },
  {
    id: 3,
    name: "SPONSORSHIP",
    link: "sponsorship",
  },
  {
    id: 4,
    name: "TRAVEL",
    link: "travel",
  },
  {
    id: 5,
    name: "FAQ",
    link: "faq",
  },
  {
    id: 6,
    name: "CONTACT US",
    link: "contact",
  },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="header Flex">
      <div className="lg_header Flex">
        <div className="logo_section">
          <img src={LOGO} alt="logo" />
        </div>

        <div className={`header_content Flex ${showMobileMenu ? "show" : ""}`}>
          {headerItems.map(({ id, name, link }) => (
            <Link
              key={id}
              to={link}
              smooth={true}
              spy={true}
              onClick={handleToggleMobileMenu}
            >
              {name}
            </Link>
          ))}
        </div>

        <Button content={"BUY TICKETS"} color={"white"} icon={"black"} />
      </div>

      <div className="sm_header_option Flex" onClick={handleToggleMobileMenu}>
        {!showMobileMenu && (
          <div className="logo_section">
            <img src={LOGO} alt="logo" />
          </div>
        )}
        {showMobileMenu && (
          <div className="mobile_menu_content">
            {headerItems.map(({ id, name, link }) => (
              <Link
                key={id}
                to={link}
                smooth={true}
                spy={true}
                onClick={handleToggleMobileMenu}
              >
                {name}
              </Link>
            ))}
            <Button
              content={"BUY TICKETS"}
              color={"var(--primary-gradient)"}
              icon={"white"}
              text={"white"}
            />
          </div>
        )}
        <div>
          {showMobileMenu ? (
            <MdClose color="white" size={30} />
          ) : (
            <MdMenu color="white" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
