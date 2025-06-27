import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { animate, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: "0" }}
              animate={{ y: "0", opacity: "1" }}
              transition={{ duration: "2", type: "spring" }}
            >
              Discover <br />
              More Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Discover a wide range of properties tailored to your lifestyle and
              budget.
            </span>
            <span className="secondaryText">
              Forget the hassle—finding your dream home has never been this
              simple.
            </span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>
          <divs className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Won</span>
            </div>
          </divs>
        </div>
        {/* right section */}
        <motion.div
          className="flexCenter hero-right"
          initial={{ x: "7rem", opacity: "0" }}
          animate={{ x: "0", opacity: "1" }}
          transition={{ duration: "2", type: "spring" }}
        >
          <div className="image-container">
            <img src="./hero-image.png"></img>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
