import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with RyyderBros</span>
          <span className="secondaryText">
            Subscribe now and get access to exclusive, attractive price quotes.
            <br />
            Your dream residence is just a click away!.
          </span>
          <button className="button">
            <a href="mailto:ryderbros@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
