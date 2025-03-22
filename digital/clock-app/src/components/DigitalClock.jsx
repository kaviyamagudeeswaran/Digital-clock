import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 text-center"
      style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298)" }}
    >
      <div
        className="card p-4 shadow-lg text-center"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          width: "400px",
        }}
      >
        <h2 className="mb-3 text-secondary">Digital Clock</h2>
        <h1 className="display-4 text-dark">{formatTime(time)}</h1>
        <h3 className="mt-2 text-primary">{formatDate(time)}</h3>
      </div>
    </div>
  );
};

export default DigitalClock;
