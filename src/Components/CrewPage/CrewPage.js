import React, { useState, useEffect, useContext } from "react";
import "./CrewPage.css";
import DesktopBackGroundImage from "../../assets/crew/background-crew-desktop.jpg";
import TabletBackGroundImage from "../../assets/crew/background-crew-tablet.jpg";
import MobileBackGroundImage from "../../assets/crew/background-crew-mobile.jpg";

import { Data } from "../../App";

const CrewPage = () => {
  const data = useContext(Data);
  const CrewData = data.AppData.crew;
  const [stateImage, setStateImage] = useState(window.innerWidth);
  const [navigatorstate, setNavigatorState] = useState("Douglas Hurley");
  const [selectedCrew, setSelectedCrew] = useState(CrewData[0]);
  console.log(selectedCrew.images.png);

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
    const SelectedDestination = CrewData.filter((record) => {
      return record.name === navigatorstate;
    });
    console.log(SelectedDestination[0]);
    setSelectedCrew(SelectedDestination[0]);
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

  const CrewHandler = (e) => {
    let selectedCrewmember = e.target.getAttribute("CrewName");
    setNavigatorState(selectedCrewmember);
  };

  return (
    <div>
      <img
        alt="BackgroundImage"
        className="BackGroundImage"
        src={ChooseBackGround()}
      ></img>
      <div className="CrewPageTitle">
        <label className="TitleNumber">02</label>
        <label className="TitleName">MEET YOUR CREW</label>
      </div>
      <div className="CrewMainContainer">
        <div className="CrewInformation">
          <label id="CrewRole">{selectedCrew.role.toUpperCase()}</label>

          <label id="CrewName">{selectedCrew.name}</label>
          <p id="CrewDescreption">{selectedCrew.bio}</p>
          <div id="CrewNavBar">
            <button className="CrewNavBarBtn" CrewName = "Douglas Hurley" onClick={CrewHandler}></button>
            <button className="CrewNavBarBtn" CrewName = "Mark Shuttleworth" onClick={CrewHandler}> </button>
            <button className="CrewNavBarBtn" CrewName = "Victor Glover" onClick={CrewHandler}> </button>
            <button className="CrewNavBarBtn" CrewName = "Anousheh Ansari" onClick={CrewHandler}></button>
          </div>
        </div>

      </div>
      <img
          alt="CrewImage"
          id="CrewImage"
          src={selectedCrew.images["png"]}
        ></img>
        
    </div>
  );
};

export default CrewPage;
