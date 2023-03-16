import React, { useState, useEffect, useContext } from "react";
import "./DestinationPage.css";
import DesktopBackGroundImage from "../../Assets/destination/background-destination-desktop.jpg";
import TabletBackGroundImage from "../../Assets/destination/background-destination-mobile.jpg";
import MobileBackGroundImage from "../../Assets/destination/background-destination-tablet.jpg";
import MoonImage from "../../Assets/destination/image-moon.png";
import { Data } from "../../App";

const DestinationPage = () => {
  const data = useContext(Data);
  const DestinationData = data.AppData.destinations;
  const [stateImage, setStateImage] = useState(window.innerWidth);
  const [navigatorstate, setNavigatorState] = useState("Moon");
  const [selectedMoon, setSelectedMoon] = useState(DestinationData[0]);
  useEffect(() => {
    const handleWindowResize = () => {
      setStateImage(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  useEffect(() => {
    const SelectedDestination = DestinationData.filter((record) => {
      return record.name === navigatorstate;
    });
    console.log(SelectedDestination[0]);
    setSelectedMoon(SelectedDestination[0]);
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

  const PlantHandler = (e) => {
    let selectedlabel = e.target.innerText;
    selectedlabel = selectedlabel.toLowerCase();
    selectedlabel =
      selectedlabel.charAt(0).toUpperCase() + selectedlabel.slice(1);
    setNavigatorState(selectedlabel);
  };

  return (
    <div>
      <img
        alt="BackgroundImage"
        className="BackGroundImage"
        src={ChooseBackGround()}
      ></img>
      <div className="Title">
        <label className="TitleNumber">01</label>
        <label className="TitleName">Pick your destination</label>
      </div>
      <div className="MainContainer">
        <img
          alt="PlantImage"
          id="PlantImage"
          src={selectedMoon.images["png"]}
        ></img>
        <div className="PlantInformation">
          <div id="PlantNavBar">
            <label className="Navbarplants" onClick={PlantHandler}>
              MOON
            </label>
            <label className="Navbarplants" onClick={PlantHandler}>
              MARS
            </label>
            <label className="Navbarplants" onClick={PlantHandler}>
              EUROPA
            </label>
            <label className="Navbarplants" onClick={PlantHandler}>
              TITAN
            </label>
          </div>
          <label id="PlantName">{selectedMoon.name.toUpperCase()}</label>
          <p id="PlantDescreption">{selectedMoon.description}</p>
          <hr id="Line"></hr>
          <div id="InfoLabelsWrapper">
            <div className="InnerInfoLabelsWrapper">
              <label className="InfoLabels titleLabel">AVG. DISTANCE</label>
              <label className="InfoLabels numberLabel">
                {selectedMoon.distance.toUpperCase()}
              </label>
            </div>
            <div className="InnerInfoLabelsWrapper">
              <label className="InfoLabels titleLabel">Est. travel time</label>
              <label className="InfoLabels numberLabel">
                {selectedMoon.travel.toUpperCase()}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
