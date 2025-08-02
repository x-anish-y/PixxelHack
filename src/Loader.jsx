import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [count, setCount] = useState(0);
  const [fontToggle, setFontToggle] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= 100) {
        setCount(i++);
      } else {
        clearInterval(interval);
      }
    }, 20);
  }, []);

  useEffect(() => {
    const toggle = setInterval(() => {
      setFontToggle(prev => !prev);
    }, 400);
    return () => clearInterval(toggle);
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <span className="loader-count">{count} – 100</span>
        <div className="clip-text">
          <span className="clip-line" style={{ animationDelay: "0.2s" }}>YOUR</span>
          <span className="clip-line" style={{ animationDelay: "0.5s" }}>WEB EXPERIENCE</span>
          <span className="clip-line" style={{ animationDelay: "0.8s" }}>
            IS LOADING RIGHT <span className={`now-text ${fontToggle ? "alt" : ""}`}>NOW</span>
          </span>
        </div>

        <div className="loader-hint">Please wait<br />a few seconds.</div>
      </div>
    </div>
  );
};

export default Loader;
