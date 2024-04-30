import React, { useState, useEffect } from "react";
import "./timeSection.css";

const TimeSection = ({bgColor}) => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const days = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return { days, hours, minutes, seconds };
  }
  

  return (
    <div className="time_section_blocks Flex">
      <div className="time_block Flex" style={{background:bgColor}}>
        <span>{time.days}</span>
        <span>Days</span>
      </div>
      <div className="colon">:</div>
      <div className="time_block Flex" style={{background:bgColor}}>
        <span>{time.hours}</span>
        <span>Hours</span>
      </div>
      <div className="colon">:</div>
      <div className="time_block Flex" style={{background:bgColor}}>
        <span>{time.minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="colon">:</div>
      <div className="time_block Flex" style={{background:bgColor}}>
        <span>{time.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default TimeSection;
