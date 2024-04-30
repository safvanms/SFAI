import React from "react";
import "./tickets.css";
import Button from "../Button/Button";
import Std from "../../Assets/Images/standard.png";
import Premium from "../../Assets/Images/premium.png";

const ticketCards = [
  {
    id: 1,
    type: "Standard",
    rate: "850",
    name: "Main Conference",
    description:
      "Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food.",
  },
  {
    id: 2,
    type: "Premium",
    rate: "950",
    name: "Conference & Workshop",
    description:
      "Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshops.",
  },
  {
    id: 3,
    type: "Premium-ticket",
    rate: "1250",
    name: "Super pass Conference + 1",
    description:
      "Everything from General Admission and you get full, exclusive access for a year.",
  },
];

const Tickets = () => {
  return (
    <div className="ticket_container Flex " id="tickets">
      <div className="ticket_wrapper">
        <div className="tickets_head Flex">
          <div className="t_head_1 Flex">
            <h1>
              Choose your <span>Ticket</span>
            </h1>
            <div className="t_button">
              <Button
                content={"VIEW ALL TICKETS"}
                color={"#F1F1F1"}
                icon={"black"}
                text={"black"}
              />
            </div>
          </div>
          <div className="t_head_2 Flex">
            <p>PRICING PLANS</p>
            <div></div>
          </div>
          <div className="t_description Flex">
            <p>
              Attending such an event can expose you to different ways of
              thinking about economic issues and help you broaden your
              understanding of the field.
            </p>
          </div>
        </div>
        <div className="tickets Flex">
          {ticketCards.map(({ id, rate, type, name, description }) => (
            <div
              className="ticket"
              key={id}
              style={{
                background:
                  type === "Standard" || type === "Premium-ticket"
                    ? "white"
                    : "var(--ternary-gradient)",
              }}
            >
              <div className="ticket_type Flex">
                <img src={type === "Standard" ? Std : Premium} alt="type" />
                <p>{type}</p>
              </div>
              <p className="rate">${rate}</p>

              <h3>{name}</h3>

              <p className="t_description">{description}</p>

              <div className="ticket_button">
                <Button
                  content={"VIEW ALL TICKETS"}
                  color={"transparent"}
                  icon={
                    type === "Standard" || type === "Premium-ticket"
                      ? "var(--primary-color)"
                      : "white"
                  }
                  text={
                    type === "Standard" || type === "Premium-ticket"
                      ? "var(--primary-color)"
                      : "white"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
