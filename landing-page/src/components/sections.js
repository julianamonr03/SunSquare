import React from "react";
import search from "../img/sections/searchengine.png";
import social from "../img/sections/socialnetwork.png";
import heart from "../img/sections/heart.png";
import accord from "../img/sections/cooperation.png";
import n1 from "../img/numbers/caption1.png";
import n2 from "../img/numbers/caption2.png";
import n3 from "../img/numbers/caption3.png";
import n4 from "../img/numbers/caption4.png";
import "../sections.css";

function Sections() {
  return (
    <>
      <h2 className="title-section bold">How it Works</h2>
      <div className="sections">
        <div className="section1">
          <div className="img-section">
            <img className="img-sections" src={search} alt="" />
          </div>
          <div className="text-section">
            <img src={n1} alt="" className="number-section" />
            <p className="parr">Enter your preference in the ad search engine</p>
          </div>
        </div>

        <div className="section2">
          <div className="text-section">
            <img src={n2} alt="" className="number-section" />
            <p className="parr">The owner of the ad will check the best options</p>
          </div>
          <div className="img-section">
            <img className="img-sections" src={social} alt="" />
          </div>
        </div>

        <div className="section3">
          <div className="img-section">
            <img className="img-sections" src={heart} alt="" id="heart" />
          </div>
          <div className="text-section">
            <img src={n3} alt="" className="number-section" />
            <p className="parr">
              The owner of the ad will choose the best option, it will surely be
              YOU!
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="text-section">
            <img src={n4} alt="" className="number-section" />
            <p className="parr">The matching will be done and you will have your new property</p>
          </div>
          <div className="img-section">
            <img className="img-sections" src={accord} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;