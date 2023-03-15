import React, { useState, useEffect, useContext } from "react";
import "./TechnologyPage.css";
import DesktopBackGroundImage from "../../Assets/technology/background-technology-desktop.jpg";
import TabletBackGroundImage from "../../Assets/technology/background-technology-tablet.jpg";
import MobileBackGroundImage from "../../Assets/technology/background-technology-mobile.jpg";

import { Data } from "../../App";

const TechnologyPage = () => {
  const data = useContext(Data);
  console.log(data.AppData);
  const TechnologyData = data.AppData.technology;
  const [stateImage, setStateImage] = useState(window.innerWidth);
  const [ImageDimensions, setImageDimensions] = useState();
  const [navigatorstate, setNavigatorState] = useState("Launch vehicle");
  const [selectedTechnology, setSelectedTechnology] = useState(
    TechnologyData[0]
  );

  useEffect(() => {
    if (window.innerWidth > 768) {
      setImageDimensions("portrait");
    } else {
      setImageDimensions("landscape");
    }
    const handleWindowResize = () => {
      setStateImage(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    const selectedTechnology = TechnologyData.filter((record) => {
      return record.name === navigatorstate;
    });
    console.log(selectedTechnology[0]);
    setSelectedTechnology(selectedTechnology[0]);
  }, [navigatorstate]);

  const ChooseBackGround = () => {
    if (stateImage > 768) {
      //Desktop View
      return DesktopBackGroundImage;
    } else if (stateImage > 375) {
      //TabletView
      return TabletBackGroundImage;
    } else if (stateImage <= 375) {
      //MobileView
      return MobileBackGroundImage;
    }
  };

  const TechnologyHandler = (e) => {
    let selectedTechnologyName = e.target.getAttribute("TechnologyName");
    setNavigatorState(selectedTechnologyName);
  };

  return (
    <div>
      <img
        alt="BackgroundImage"
        className="BackGroundImage"
        src={ChooseBackGround()}
      ></img>
      <div className="TechnologyPageTitle">
        <label className="TitleNumber">03</label>
        <label className="TitleName">SPACE LAUNCH 101</label>
      </div>
      <div className="TechnologyMainContainer">
        <img
          alt="CrewImage"
          id="TechnologyImage"
          src={selectedTechnology.images[ImageDimensions]}
        ></img>
        <div id="InnerContent">
          <div id="TechnologyNavBar">
            <button
              className="TechnologyNavBarBtn"
              TechnologyName="Launch vehicle"
              onClick={TechnologyHandler}
            >
              1
            </button>
            <button
              className="TechnologyNavBarBtn"
              TechnologyName="Spaceport"
              onClick={TechnologyHandler}
            >
              2
            </button>
            <button
              className="TechnologyNavBarBtn"
              TechnologyName="Space capsule"
              onClick={TechnologyHandler}
            >
              3
            </button>
          </div>
          <div className="TechnologyInformation">
            <div id="InnerTechInfoWrapper">
              <label id="TechnologyRole">THE TERMINOLOGY ...</label>

              <label id="TechnologyName">{selectedTechnology.name}</label>
              <p id="TechnologyDescreption">{selectedTechnology.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
