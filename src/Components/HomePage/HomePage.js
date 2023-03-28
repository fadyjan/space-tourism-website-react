import React ,{useState,useEffect,useContext} from 'react'
import { IndexSelection } from "../../App";
import DesktopBackGroundImage from "../../assets/home/background-home-desktop.jpg"
import TabletBackGroundImage from "../../assets/home/background-home-tablet.jpg"
import MobileBackGroundImage from "../../assets/home/background-home-mobile.jpg"
import "./HomePage.css"
const HomePage = () => {
    const [ stateImage, setStateImage ] =useState(window.innerWidth);
    const index = useContext(IndexSelection)
    useEffect(() => {
      const handleWindowResize = () => {
          setStateImage(window.innerWidth)
      };
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
    const ChooseBackGround = ()=>{
        if (stateImage >768) {
            //Desktop View
            return DesktopBackGroundImage 
        } else if(stateImage >375) {
            //TabletView
           return TabletBackGroundImage
        }else if (stateImage <=375){
            //MobileView
            return MobileBackGroundImage 
        }
    }
  return (
    <>
    <div id='HomeDivWrapper'>
      <label id='HomeLabel'>SO, YOU WANT TO TRAVEL TO</label>
      <label id='SpaceHeader'>SPACE</label>
      <p id='HomeParagrhape'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <img className="BackGroundImage" src={ChooseBackGround()} ></img>
    <button id='EXPLOREBTN' onClick={()=>{index.IndexHandler("Destination")}}>EXPLORE</button>
    </>
  )
}

export default HomePage