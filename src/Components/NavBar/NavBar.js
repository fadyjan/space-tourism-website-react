import React ,{useEffect,useContext ,useState} from "react";
import "./NavBar.css";
import { IndexSelection } from "../../App";
import LogoIcon from "../../Assets/shared/logo.svg";
import BurgerIcon from "../../Assets/shared/icon-hamburger.svg"
import  CloseICon from "../../Assets/shared/icon-close.svg"
const NavBar = () => {
  const [IconMenu, seticonMenu] = useState(true)
    const index = useContext(IndexSelection)
    useEffect(() => {
      const handleWindowResize = () => {
          if (window.innerWidth > 501) {
            document.getElementById("OuterWrapperSelections").style.visibility ="visible"
          }else{
            document.getElementById("OuterWrapperSelections").style.visibility ="hidden"
            seticonMenu(true)
          }
      };
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    },[window.innerWidth]);

    const handleOnNavBarClick = (e)=>{

      index.IndexHandler(e.target.getAttribute("indexname"))
    }
    const Toggle = (el)=>{
      if (IconMenu === false) {
        document.getElementById("OuterWrapperSelections").style.visibility ="hidden"
      } else {
        document.getElementById("OuterWrapperSelections").style.visibility ="visible"
      }
      seticonMenu(!IconMenu)
     }
  return (
    <div id="NavBar">
      <img alt="LogoIcon" id="LogoIcon" src={LogoIcon}></img>
      <div id="navbarLine"></div>
      <div id="OuterWrapperSelections">
        <div id="InnerWrapperSelections">
          <div className="LabelSelectionWrapper"  indexname = "Home" onClick={handleOnNavBarClick}>
            <label indexname = "Home" className="SelectionIndex">00</label>
            <label indexname = "Home" className="SelectionName">Home</label>
          </div>
          <div className="LabelSelectionWrapper"  indexname = "Destination"  onClick={handleOnNavBarClick}>
            <label indexname = "Destination" className="SelectionIndex">01</label>
            <label indexname = "Destination" className="SelectionName">Destination</label>
          </div>
          <div className="LabelSelectionWrapper"  indexname = "Crew"  onClick={handleOnNavBarClick}>
            <label indexname = "Crew" className="SelectionIndex">02</label>
            <label indexname = "Crew" className="SelectionName">Crew</label>
          </div>
          <div className="LabelSelectionWrapper"   indexname = "Technology"  onClick={handleOnNavBarClick}>
            <label  indexname = "Technology" className="SelectionIndex">03</label>
            <label  indexname = "Technology" className="SelectionName">Technology</label>
          </div>
        </div>
      </div>
      <img alt="" src={IconMenu === true ? BurgerIcon : CloseICon} id="BurgerIconImg" onClick={Toggle}></img>

    </div>
  );
};

export default NavBar;
